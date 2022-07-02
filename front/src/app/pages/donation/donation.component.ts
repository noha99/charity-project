import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../service/DonationService";
import {Donation} from "../../model/Donation";
import {Project} from "../../model/Project";
import {ProjectService} from "../../service/ProjectService";

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  projects : Array<Project> = [];
  selectedProject: any;
  Amount: any;
  Name: any;
  CardNum: any;

  first_step: boolean = true;
  sec_step: boolean = false;


  constructor(private projectService :ProjectService,
              private donationService : DonationService) { }

  ngOnInit(): void {
    this.refreshData();
  }


  refreshData() {
    this.projectService.getProjectsList().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: Project[]) {
    this.projects = response;
  }

  handleFirstClick() {
    this.first_step = false;
    this.sec_step = true;
  }

  handleClick() {

    let donation = new Donation(this.Amount, this.CardNum , this.selectedProject , this.Name)
    this.donationService.addDonation(donation);
  }
}
