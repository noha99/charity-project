import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  @Input()
  caseId:any;

  @Input()
  projectId:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleDonate() {
    if(this.projectId){
      this.router.navigate(['/pages','donation'],{ queryParams: { 'projectId': this.projectId }});
    }else if(this.caseId){
      this.router.navigate(['/pages','donation'],{ queryParams: { 'caseId': this.caseId }});
    }
    else{
      this.router.navigateByUrl('/pages/donation');
    }
  }

}
