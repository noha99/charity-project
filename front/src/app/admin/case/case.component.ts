import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Case} from "../../model/Case";
import {CaseService} from "../../service/CaseService";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  cases: Array<Case> = [];
  selectedCase: Case = new Case();
  action: string | undefined;
  show: boolean = false;

  constructor(private caseService: CaseService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.caseService.getCasesList().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedCaseId = params['id'];
        if (selectedCaseId) {
          this.selectedCase = this.cases.find(c => c.id === +selectedCaseId)!;//It tells TypeScript that even though something looks like it could be null, it can trust you that it's not
        }
      }
    );

    this.show = false;
  }

  handleSuccessfulResponse(response: Case[]) {
    let list : Array<Case> = [];
    response.forEach(res=>(res.approved != true)? list.push(res): list )
    this.cases = list;
  }

  addCase() {
    this.show =true;
    this.selectedCase = new Case();
    this.router.navigate(['admin', 'case'], {queryParams: {action: 'add'}});
  }

  viewCase(id: number) {
    this.show = true;
    this.router.navigate(['admin', 'case'], { queryParams: { id, action: 'view' } });
  }

  cancel() {
    this.router.navigate(['admin', 'case']);

  }
}
