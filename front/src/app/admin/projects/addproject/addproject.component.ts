import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../../model/Project";
import {ProjectService} from "../../../service/ProjectService";

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {

  @Input()
  project !: Project;

  @Output()
  projectAddedEvent = new EventEmitter(); //send new user to page to display

  projects : Project[]=[];
  selectedProject : any;

  newProject = new Project();
  // clicked: boolean = false;
  checked: boolean=false;
  msgs: string='';
  isExist: boolean=false;
  action: string='';

  categories: any = ["Water", "Education", "Food"];

  constructor(private projectService: ProjectService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.projectService.getProjectsList().subscribe(
      response => this.projects = response
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );

    this.newProject = Object.assign({}, this.project);
  }

  saveProject() {
    if (this.project.title == null) {
      this.checked = true;
      this.msgs = 'title is required';
    } else if (this.project.place == null) {
      this.checked = true;
      this.msgs = 'place is required';
    } else if (this.project.resposedBy == null) {
      this.checked = true;
      this.msgs = 'resposedBy is required';
    } else if (this.project.amountNeeded == null) {
      this.checked = true;
      this.msgs = 'amountNeeded is required';
    }else {
      this.checked = false;
      if(this.projects){
        this.selectedProject = this.projects.find(b => b.title === this.project.title)!;
      }
      if (this.selectedProject && this.action != 'edit') {
        this.isExist = true;
        this.selectedProject = new Project();
        this.msgs = 'this project already exists';
      }
      else{
        //If there is no project id then it is an add project call else it is an edit project call
        if (this.project.id == null) {
          this.projectService.addProject(this.project).subscribe(
            (project) => {
              // this.clicked = true;
              this.projectAddedEvent.emit();
              this.router.navigate(['admin', 'projects']);
            }
          );
        } else {
          this.projectService.updateProject(this.project).subscribe(
            (project) => {
              this.projectAddedEvent.emit();
              this.router.navigate(['admin', 'projects']);
            }
          );
        }
      }
    }
  }

  onChange(event: any) {
    this.project.category = event.value;
  }
}
