import { Component, OnInit } from '@angular/core';
import {Project} from "../../../model/Project";
import {ProjectService} from "../../../service/ProjectService";
import {ActivatedRoute, Router} from "@angular/router";
import {Case} from "../../../model/Case";
import {CaseService} from "../../../service/CaseService";

@Component({
  selector: 'app-caseinfo',
  templateUrl: './caseinfo.component.html',
  styleUrls: ['./caseinfo.component.scss']
})
export class CaseinfoComponent implements OnInit {

  cases !: Case[];

  casee !: Case;
  percentage: any;

  constructor(private caseService :CaseService ,
              private router : Router,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.caseService.getCasesList().subscribe(
      response => {
        this.cases =response ;
        this.loadData();
        let b = (this.casee.donation / this.casee.amountNeeded ) * 100
        this.percentage = b+'%';
      }
    );
  }

  loadData(){
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        const selectedCaseId = params['id'];
        if (selectedCaseId) {
          this.casee = this.cases.find(c => c.id === +selectedCaseId)!;//It tells TypeScript that even though something looks like it could be null, it can trust you that it's not
        }
      }
    );
    if(this.casee.donation>=this.casee.amountNeeded){
      this.casee.isDone=true;
      this.caseService.updateCase(this.casee).subscribe((d) => {});
    }
  }

  toProjects() {
    this.router.navigateByUrl('pages/cases');
  }

}
