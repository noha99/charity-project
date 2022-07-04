import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "../../../model/Project";
import {ProjectService} from "../../../service/ProjectService";
import {ActivatedRoute, Router} from "@angular/router";
import {Case} from "../../../model/Case";
import {CaseService} from "../../../service/CaseService";
import {HttpClientService} from "../../../service/http-client.service";
import {User} from "../../../model/User";

@Component({
  selector: 'app-addcase',
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.scss']
})
export class AddcaseComponent implements OnInit {

  @Input()
  casee !: Case;

  @Output()
  caseAddedEvent = new EventEmitter(); //send new case to page to display

  cases : Case[]=[];
  users : User[]=[];
  selectedCase : any;

  newCase = new Case();
  // clicked: boolean = false;
  checked: boolean=false;
  msgs: string='';
  isExist: boolean=false;
  action: string='';

  gender: any = ["male" , "female"];
  nationality: any = [
    'British' , 'Afghan' ,'Albanian' ,
    'Algerian','American' , 'Andorran' , 'Angolan' , 'Armenian' ,'Austrian' ,
    'Azerbaijani','Argentinian' ,'Australian' ,'Bahraini' , 'Bangladeshi' ,
    'Barbadian' , 'Belarusian' , 'Belizean','Beninese' , 'Bermudian' ,
    'Bhutanese' , 'Bolivian' , 'Bosnian' , 'Botswanan' , 'Bulgarian' ,
    'Burkinese' , 'Burundian' , 'Canadian' , 'Chinese' , 'Colombian' , 'Cuban' ,
    'Cambodian' , 'Cameroonian' , 'Cape Verdean' , 'Chadian' , 'Chilean' ,
    'Congolese' , 'Costa Rican' , 'Croat' , 'Cypriot' , 'Czech' , 'Danish' ,
    'Dominican' , 'Djiboutian' , 'Dominican' ,'Dutch' ,'Ecuadorean', 'Egyptian' ,
    'Eritrean' , 'Estonian' , 'Ethiopian' , 'Fijian' , 'Finnish' , 'French Polynesian' ,
    'French' , 'Gabonese' , 'Gambian' , 'Georgian' , 'German' , 'Guatemalan' ,
    'Ghanaian' , 'Greek' ,'Grenadian' , 'Guinean' ,'Guyanese' , 'Haitian' ,
    'Honduran' , 'Hungarian', 'Indian' , 'Ireland' , 'Israeli' , 'Italian' , 'Icelandic' ,
    'Indonesian' ,'Iranian' ,'Iraqi' , 'Japanese' , 'Jamaican' , 'Jordanian', 'Kazakh' ,
    'Kenyan' , 'North Korean' , 'Kuwaiti', 'Latvian' , 'Lebanese' , 'Liberian' , 'Libyan' , 'Lithuanian' , 'LUXEMBOURG' ,
    'Madagascan' , 'Malawian' , 'Malaysian' , 'Maldivian' , 'Malian' , 'Maltese' , 'Mauritanian' , 'Mauritian' ,
    'Monacan' , 'Mongolian' ,'Montenegrin' , 'Moroccan' ,'Mozambican' , 'Mexican' , 'Namibian' , 'Nepalese' , 'New Zealand',
    'Nicaraguan' , 'Nigerien' , 'Nigerian' , 'Norwegian' , 'Omani' , 'Pakistani' , 'Panamanian' , 'Guinean' , 'Paraguayan' ,
    'Peruvian' ,'Philippine' ,'Polish' , 'Portuguese' , 'Qatari' , 'Romanian' , 'Rwandan', 'Salvadorean' ,'Samoan' ,
    'Saudi Arabian' , 'Senegalese' , 'Serbian' ,'Sierra Leonian' , 'Singaporean' , 'Slovak' , 'Slovenian' , 'Slomoni' ,
    'Somali' , 'South African' , 'South Korean' , 'Spanish' , 'Swedish' , 'Swiss' , 'Sri Lankan' , 'Sudanese' , 'Surinamese' ,
    'Swazi', 'Taiwanese' , 'Tajik' , 'Thai','Togolese', 'Trinidadian' , 'Tunisian' , 'Turkish' , 'Turkoman' ,
    'Tuvaluan','Ugandan' , 'Ukrainian' ,'Emirati' , 'Venezuelan','Vietnamese' ,'Uruguayan' ,'Uzbek' ,'Vanuatuan' ,'Yemeni' , 'Zambian'
  ];
  loginType: string | null;
  isAdmin: boolean = false;

  constructor(private caseService: CaseService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.loginType = localStorage.getItem("type");
    if (this.loginType != null && this.loginType == 'admin') {
      this.isAdmin = true;
    }
  }

  ngOnInit(): void {
    this.caseService.getCasesList().subscribe(
      response => this.cases = response
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );

    this.newCase = Object.assign({}, this.casee);
  }

  saveCase() {
    if (this.casee.governorate== null) {
      this.checked = true;
      this.msgs = 'governorate is required';
    } else if (this.casee.nationality == null) {
      this.checked = true;
      this.msgs = 'nationality is required';
    } else if (this.casee.description == null) {
      this.checked = true;
      this.msgs = 'description is required';
    }else if (this.casee.gender == null) {
      this.checked = true;
      this.msgs = 'gender is required';
    }else if (this.casee.age == null) {
      this.checked = true;
      this.msgs = 'age is required';
    }else if (this.casee.phone == null) {
      this.checked = true;
      this.msgs = 'phone is required';
    }else if (this.casee.reporterAdress == null) {
      this.checked = true;
      this.msgs = 'reporterAdress is required';
    }else if (this.casee.reporterName == null) {
      this.checked = true;
      this.msgs = 'reporterName is required';
    }else if (this.casee.reporterPhone == null) {
      this.checked = true;
      this.msgs = 'reporterPhone is required';
    }else {
      this.checked = false;
      debugger
      if(this.cases){
        this.selectedCase = this.cases.find(b => b.name === this.casee.name);
      }
      if (this.selectedCase && this.action != 'edit') {
        this.isExist = true;
        this.selectedCase = new Case();
        this.msgs = 'this Case code already exists';
      }
      else{
        //If there is no case id then it is an add case call else it is an edit case call
        if (this.casee.id == null) {
          this.casee.approved = false;

          this.caseService.addCase(this.casee).subscribe(
            (response) => {
              // this.clicked = true;
              this.caseAddedEvent.emit();
              this.router.url;
            }
          );
        } else {
          this.caseService.updateCase(this.casee).subscribe(
            (project) => {
              this.caseAddedEvent.emit();
              if(this.loginType == 'admin'){
                this.router.navigate(['admin', 'case']);
              }
              else{
                this.router.navigate(['pages', 'cases']);
              }
            }
          );
        }
      }
    }
  }

  onGenderChange(event: any) {
    this.casee.gender = event.value;
  }

  onNationalityChange(event: any) {
    this.casee.nationality = event.value;
  }

  Approve() {
    this.casee.approved = true;
  }
}
