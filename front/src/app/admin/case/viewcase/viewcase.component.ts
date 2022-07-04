import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Case} from "../../../model/Case";
import {CaseService} from "../../../service/CaseService";

@Component({
  selector: 'app-viewcase',
  templateUrl: './viewcase.component.html',
  styleUrls: ['./viewcase.component.css']
})
export class ViewcaseComponent implements OnInit {

  @Input()
  casee!: Case;

  @Output()
  caseDeletedEvent = new EventEmitter();

  constructor(private caseService: CaseService, private router: Router) { }

  ngOnInit(): void {

  }

  deleteCase() {
    this.caseService.deleteCase(this.casee.id).subscribe(
      (project) => {
        this.caseDeletedEvent.emit();
        this.router.navigate(['admin', 'case']);
      }
    );
  }

  editCase() {
    this.router.navigate(['admin', 'case'], { queryParams: { action: 'edit', id: this.casee.id } });
  }

}
