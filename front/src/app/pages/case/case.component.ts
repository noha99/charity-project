import {Component, OnInit, ViewChild} from '@angular/core';
import {PrimeNGConfig, SelectItem} from "primeng/api";
import {Table} from "primeng/table";
import {ActivatedRoute, Router} from "@angular/router";
import {Case} from "../../model/Case";
import {CaseService} from "../../service/CaseService";
import {Project} from "../../model/Project";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  cases !: Case[];

  categories: SelectItem[] = [];

  @ViewChild('dv')
  dv!: Table;

  totalRecords!: number ;
  loading: boolean =true;
  virtualDatabase: Case[] = [];

  showAddCaseDialoge : boolean = false;
  action: any;
  selectedCase: Case = new Case();

  constructor(private caseService :CaseService ,
              private primengConfig: PrimeNGConfig,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {  }

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
    this.showAddCaseDialoge = false;
  }

  handleSuccessfulResponse(response: Case[] ) {
    this.virtualDatabase = response;
    this.totalRecords = response.length;
  }

  applyFilterGlobal(event: Event, contains: string) {
    // @ts-ignore
    this.dv.filter((event.target as HTMLInputElement).value, contains);
  }

  showInfo(id: number) {
    this.router.navigate(['pages','caseinfo'], { queryParams: { id } });
  }

  loadProjects(event: any) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      if (this.virtualDatabase) {
        this.cases = this.virtualDatabase.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }

  AddCase() {
    this.showAddCaseDialoge = true;
  }

  cancel() {
    this.router.navigate(['pages','cases']);
  }
}
