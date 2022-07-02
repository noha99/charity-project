import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Project} from "../../../model/Project";
import {ProjectService} from "../../../service/ProjectService";

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {

  @Input()
  project!: Project;

  @Output()
  projectDeletedEvent = new EventEmitter();

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {

  }

  deleteProject() {
    this.projectService.deleteProject(this.project.id).subscribe(
      (project) => {
        this.projectDeletedEvent.emit();
        this.router.navigate(['admin', 'projects']);
      }
    );
  }

  editProject() {
    this.router.navigate(['admin', 'projects'], { queryParams: { action: 'edit', id: this.project.id } });
  }

}
