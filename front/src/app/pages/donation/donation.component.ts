import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../service/DonationService";
import {Donation} from "../../model/Donation";
import {Project} from "../../model/Project";
import {ProjectService} from "../../service/ProjectService";
import {ActivatedRoute, Router} from "@angular/router";
import {Case} from "../../model/Case";
import {CaseService} from "../../service/CaseService";

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  projects : Array<Project> = [];
  cases : Array<Case> = [];
  donation : Donation = new Donation();

  selectedProject: any;
  selectedCase: any;

  first_step: boolean = true;
  sec_step: boolean = false;

  constructor(private projectService :ProjectService,
              private caseService :CaseService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private donationService : DonationService) { }

  ngOnInit(): void {
    this.refreshData();
  }


  refreshData() {
    this.projectService.getProjectsList().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    let casesList:Array<Case>=[];
    this.caseService.getCasesList().subscribe(
      response => {
        response.forEach(res=>(res.approved==true && !res.isDone) ? casesList.push(res):casesList)
        this.cases = casesList;
      }
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.donation.projectId = params['projectId'];
        this.donation.caseId = params['caseId'];
      });
  }

  handleSuccessfulResponse(response: Project[]) {
    this.projects = response;
  }

  handleFirstClick() {
    this.first_step = false;
    this.sec_step = true;
  }
  handleback() {
    this.first_step = true;
    this.sec_step = false;
  }

  handleClick() {
    if (this.donation.projectId) {
      this.selectedProject = this.projects.find(proj => proj.id === +this.donation.projectId)!;//It tells TypeScript that even though something looks like it could be null, it can trust you that it's not
    }
    else if(this.donation.caseId) {
      this.selectedCase = this.cases.find(c => c.id === +this.donation.caseId)!;//It tells TypeScript that even though something looks like it could be null, it can trust you that it's not
    }
debugger
    if(this.selectedCase || this.selectedProject){
      if (this.donation.id == null) {
        this.donationService.addDonation(this.donation).subscribe(
          (d) => {
            if (d.projectId) {
              this.selectedProject.donation+=this.donation.amount;
              this.projectService.updateProject(this.selectedProject).subscribe(
                (d) => {});
              this.router.navigate(['pages', 'projects']);
            }
            else if(d.caseId) {
              this.selectedCase.donation +=this.donation.amount;
              this.caseService.updateCase(this.selectedCase).subscribe(
                (d) => {});
              this.router.navigate(['pages', 'cases']);
            }
          }
        );
      }
    }
  }
}
