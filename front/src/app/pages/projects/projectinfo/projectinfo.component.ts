import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../model/Project";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../service/ProjectService";

@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.scss']
})
export class ProjectinfoComponent implements OnInit {

  projects !: Project[];

  project !: Project;
  percentage: any;

  constructor(private projectService :ProjectService ,
              private router : Router,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.projectService.getProjectsList().subscribe(
      response => {
        this.projects =response ;
        this.loadData();
        let b = (this.project.donation / this.project.amountNeeded ) * 100
        this.percentage = b+'%';
      }
    );
  }

  loadData(){
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        const selectedProjectId = params['id'];
        if (selectedProjectId) {
          this.project = this.projects.find(proj => proj.id === +selectedProjectId)!;//It tells TypeScript that even though something looks like it could be null, it can trust you that it's not
        }
      }
    );
    if(this.project.donation>=this.project.amountNeeded){
      this.project.isDone=true;
      this.projectService.updateProject(this.project).subscribe((d) => {});
    }
  }

  toProjects() {
    this.router.navigateByUrl('pages/projects');
  }
}
