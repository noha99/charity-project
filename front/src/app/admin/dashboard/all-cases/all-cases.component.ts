import { Component, OnInit } from '@angular/core';
import {Donation} from "../../../model/Donation";
import {HttpClientService} from "../../../service/http-client.service";
import {DonationService} from "../../../service/DonationService";
import {Case} from "../../../model/Case";
import {CaseService} from "../../../service/CaseService";

@Component({
  selector: 'app-all-cases',
  templateUrl: './all-cases.component.html',
  styleUrls: ['./all-cases.component.css']
})
export class AllCasesComponent implements OnInit {

  cases: Case[] = [];
  donations: Donation[] = [];

  data : any;
  constructor(private caseService: CaseService,
              private httpClientService: HttpClientService,
              private donationService: DonationService) {
  }

  ngOnInit() {
    debugger
    this.donationService.getDonationList().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.caseService.getCasesList().subscribe(
      response =>  this.cases = response
    );
    this.caseService.getCasesDonationList().subscribe(
      response =>  this.data = response
    );
  }

  handleSuccessfulResponse(response: Donation[]) {
    this.donations = response;
  }

}
