import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../model/Project";
import {ProjectService} from "../../service/ProjectService";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project> = [];
  selectedProject: Project = new Project();
  action: string | undefined;
  show: boolean = false;

  constructor(private projectService: ProjectService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.projectService.getProjectsList().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedProjectId = params['id'];
        if (selectedProjectId) {
          this.selectedProject = this.projects.find(proj => proj.id === +selectedProjectId)!;//It tells TypeScript that even though something looks like it could be null, it can trust you that it's not
        }
      }
    );

    this.show = false;
  }

  handleSuccessfulResponse(response: Project[]) {
    this.projects = response;
  }

  addProject() {
    this.show =true;
    this.selectedProject = new Project();
    this.router.navigate(['admin', 'projects'], {queryParams: {action: 'add'}});
  }

  viewProject(id: number) {
    this.show = true;
    this.router.navigate(['admin', 'projects'], { queryParams: { id, action: 'view' } });
  }

  cancel() {
    this.router.navigate(['admin', 'projects']);

  }
}
