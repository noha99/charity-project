import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../../service/http-client.service";
import {Project} from "../../../model/Project";
import {ProjectService} from "../../../service/ProjectService";
import {DonationService} from "../../../service/DonationService";
import {Donation} from "../../../model/Donation";

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  projects: Project[] = [];
  donations: Donation[] = [];

  data : any;
  constructor(private projectService: ProjectService,
              private httpClientService: HttpClientService,
              private donationService: DonationService) {
  }

  ngOnInit() {
    debugger
    this.donationService.getDonationList().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.projectService.getProjectsList().subscribe(
      response =>  this.projects = response
    );
    this.projectService.getProjectsDonationList().subscribe(
      response =>  this.data = response
    );
    // this.httpClientService.getUsers().subscribe(
    //   response => this.users = response
    // );
  }

  handleSuccessfulResponse(response: Donation[]) {
    this.donations = response;
  }


}
