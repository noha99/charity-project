import {Component, OnInit, ViewChild} from '@angular/core';
import {PrimeNGConfig, SelectItem} from "primeng/api";
import {Table} from "primeng/table";
import {Router} from "@angular/router";
import {ProjectService} from "../../service/ProjectService";
import {Project} from "../../model/Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects !: Project[];

  sortField: any;
  categories: SelectItem[] = [];

  @ViewChild('dv')
  dv!: Table;

  totalRecords!: number ;
  loading: boolean =true;
  virtualDatabase: Project[] = [];

  constructor(private projectService :ProjectService ,
              private primengConfig: PrimeNGConfig,
              private router: Router
  ) {  }

  ngOnInit(): void {
    this.projectService.getProjectsList().subscribe(
      response => this.handleSuccessfulResponse(response)
    );

    this.categories = [
      {label: 'Water', value: 'Water'},
      {label: 'Education', value: 'Education'},
      {label: 'Food', value: 'Food'}
    ];

    this.primengConfig.ripple = true;
  }

  handleSuccessfulResponse(response: Project[] ) {
    if(response){
      let reslist:Array<Project>=[];
      response.forEach(res=>(!res.isDone)?reslist.push(res): reslist)
      if(reslist){
        this.virtualDatabase = reslist;
        this.totalRecords = reslist.length;
      }
    }
  }

  applyFilterGlobal(event: Event, contains: string) {
    // @ts-ignore
    this.dv.filter((event.target as HTMLInputElement).value, contains);
  }

  showInfo(id: number) {
    this.router.navigate(['pages','projectinfo'], { queryParams: { id } });
  }

  loadProjects(event: any) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      if (this.virtualDatabase) {
        this.projects = this.virtualDatabase.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }

}
