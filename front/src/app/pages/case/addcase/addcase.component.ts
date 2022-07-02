import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "../../../model/Project";
import {ProjectService} from "../../../service/ProjectService";
import {ActivatedRoute, Router} from "@angular/router";
import {Case} from "../../../model/Case";
import {CaseService} from "../../../service/CaseService";

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
  selectedCase : any;

  newCase = new Case();
  // clicked: boolean = false;
  checked: boolean=false;
  msgs: string='';
  isExist: boolean=false;
  action: string='';

  gender: any = ["male" , "female"];
  nationality: any = [
    { NationalityID: 1, CountryCode: 'GB', Nationality: 'British' },
    { NationalityID: 34, CountryCode: 'AF', Nationality: 'Afghan' },
    { NationalityID: 35, CountryCode: 'AL', Nationality: 'Albanian' },
    { NationalityID: 36, CountryCode: 'DZ', Nationality: 'Algerian' },
    { NationalityID: 158, CountryCode: 'US', Nationality: 'American' },
    { NationalityID: 38, CountryCode: 'AD', Nationality: 'Andorran' },
    { NationalityID: 39, CountryCode: 'AO', Nationality: 'Angolan' },
    { NationalityID: 40, CountryCode: 'AM', Nationality: 'Armenian' },
    { NationalityID: 41, CountryCode: 'AT', Nationality: 'Austrian' },
    { NationalityID: 42, CountryCode: 'AZ', Nationality: 'Azerbaijani' },
    { NationalityID: 2, CountryCode: 'AR', Nationality: 'Argentinian' },
    { NationalityID: 3, CountryCode: 'AU', Nationality: 'Australian' },
    { NationalityID: 43, CountryCode: 'BH', Nationality: 'Bahraini' },
    { NationalityID: 44, CountryCode: 'BD', Nationality: 'Bangladeshi' },
    { NationalityID: 45, CountryCode: 'BB', Nationality: 'Barbadian' },
    { NationalityID: 46, CountryCode: 'BY', Nationality: 'Belarusian' },
    { NationalityID: 47, CountryCode: 'BZ', Nationality: 'Belizean' },
    { NationalityID: 48, CountryCode: 'BJ', Nationality: 'Beninese' },
    { NationalityID: 49, CountryCode: 'BM', Nationality: 'Bermudian' },
    { NationalityID: 50, CountryCode: 'BT', Nationality: 'Bhutanese' },
    { NationalityID: 51, CountryCode: 'BO', Nationality: 'Bolivian' },
    { NationalityID: 52, CountryCode: 'BA', Nationality: 'Bosnian' },
    { NationalityID: 53, CountryCode: 'BW', Nationality: 'Botswanan' },
    { NationalityID: 54, CountryCode: 'BG', Nationality: 'Bulgarian' },
    { NationalityID: 55, CountryCode: 'BF', Nationality: 'Burkinese' },
    { NationalityID: 56, CountryCode: 'BI', Nationality: 'Burundian' },
    { NationalityID: 7, CountryCode: 'CA', Nationality: 'Canadian' },
    { NationalityID: 8, CountryCode: 'CN', Nationality: 'Chinese' },
    { NationalityID: 9, CountryCode: 'CO', Nationality: 'Colombian' },
    { NationalityID: 10, CountryCode: 'CU', Nationality: 'Cuban' },
    { NationalityID: 57, CountryCode: 'KH', Nationality: 'Cambodian' },
    { NationalityID: 58, CountryCode: 'CM', Nationality: 'Cameroonian' },
    { NationalityID: 59, CountryCode: 'CV', Nationality: 'Cape Verdean' },
    { NationalityID: 60, CountryCode: 'TD', Nationality: 'Chadian' },
    { NationalityID: 61, CountryCode: 'CL', Nationality: 'Chilean' },
    { NationalityID: 62, CountryCode: 'CG', Nationality: 'Congolese' },
    { NationalityID: 63, CountryCode: 'CR', Nationality: 'Costa Rican' },
    { NationalityID: 64, CountryCode: 'HR', Nationality: 'Croat' },
    { NationalityID: 65, CountryCode: 'CY', Nationality: 'Cypriot' },
    { NationalityID: 66, CountryCode: 'CZ', Nationality: 'Czech' },
    { NationalityID: 67, CountryCode: 'DK', Nationality: 'Danish' },
    { NationalityID: 11, CountryCode: 'DO', Nationality: 'Dominican' },
    { NationalityID: 68, CountryCode: 'DJ', Nationality: 'Djiboutian' },
    { NationalityID: 69, CountryCode: 'DM', Nationality: 'Dominican' },
    { NationalityID: 26, CountryCode: 'NL', Nationality: 'Dutch' },
    { NationalityID: 12, CountryCode: 'EC', Nationality: 'Ecuadorean' },
    { NationalityID: 70, CountryCode: 'EG', Nationality: 'Egyptian' },
    { NationalityID: 71, CountryCode: 'ER', Nationality: 'Eritrean' },
    { NationalityID: 72, CountryCode: 'EE', Nationality: 'Estonian' },
    { NationalityID: 73, CountryCode: 'ET', Nationality: 'Ethiopian' },
    { NationalityID: 74, CountryCode: 'FJ', Nationality: 'Fijian' },
    { NationalityID: 75, CountryCode: 'FI', Nationality: 'Finnish' },
    { NationalityID: 76, CountryCode: 'PF', Nationality: 'French Polynesian' },
    { NationalityID: 14, CountryCode: 'FR', Nationality: 'French' },
    { NationalityID: 77, CountryCode: 'GA', Nationality: 'Gabonese' },
    { NationalityID: 78, CountryCode: 'GM', Nationality: 'Gambian' },
    { NationalityID: 79, CountryCode: 'GE', Nationality: 'Georgian' },
    { NationalityID: 15, CountryCode: 'DE', Nationality: 'German' },
    { NationalityID: 16, CountryCode: 'GT', Nationality: 'Guatemalan' },
    { NationalityID: 80, CountryCode: 'GH', Nationality: 'Ghanaian' },
    { NationalityID: 81, CountryCode: 'GR', Nationality: 'Greek' },
    { NationalityID: 82, CountryCode: 'GD', Nationality: 'Grenadian' },
    { NationalityID: 83, CountryCode: 'GN', Nationality: 'Guinean' },
    { NationalityID: 84, CountryCode: 'GY', Nationality: 'Guyanese' },
    { NationalityID: 17, CountryCode: 'HT', Nationality: 'Haitian' },
    { NationalityID: 18, CountryCode: 'HN', Nationality: 'Honduran' },
    { NationalityID: 85, CountryCode: 'HU', Nationality: 'Hungarian' },
    { NationalityID: 19, CountryCode: 'IN', Nationality: 'Indian' },
    { NationalityID: 20, CountryCode: 'IE', Nationality: 'Ireland' },
    { NationalityID: 21, CountryCode: 'IL', Nationality: 'Israeli' },
    { NationalityID: 22, CountryCode: 'IT', Nationality: 'Italian' },
    { NationalityID: 86, CountryCode: 'IS', Nationality: 'Icelandic' },
    { NationalityID: 87, CountryCode: 'ID', Nationality: 'Indonesian' },
    { NationalityID: 88, CountryCode: 'IR', Nationality: 'Iranian' },
    { NationalityID: 89, CountryCode: 'IQ', Nationality: 'Iraqi' },
    { NationalityID: 23, CountryCode: 'JP', Nationality: 'Japanese' },
    { NationalityID: 90, CountryCode: 'JM', Nationality: 'Jamaican' },
    { NationalityID: 91, CountryCode: 'JO', Nationality: 'Jordanian' },
    { NationalityID: 92, CountryCode: 'KZ', Nationality: 'Kazakh' },
    { NationalityID: 93, CountryCode: 'KE', Nationality: 'Kenyan' },
    { NationalityID: 94, CountryCode: 'KP', Nationality: 'North Korean' },
    { NationalityID: 95, CountryCode: 'KW', Nationality: 'Kuwaiti' },
    { NationalityID: 96, CountryCode: 'LV', Nationality: 'Latvian' },
    { NationalityID: 97, CountryCode: 'LB', Nationality: 'Lebanese' },
    { NationalityID: 98, CountryCode: 'LR', Nationality: 'Liberian' },
    { NationalityID: 99, CountryCode: 'LY', Nationality: 'Libyan' },
    { NationalityID: 100, CountryCode: 'LT', Nationality: 'Lithuanian' },
    { NationalityID: 101, CountryCode: 'LU', Nationality: 'LUXEMBOURG' },
    { NationalityID: 102, CountryCode: 'MG', Nationality: 'Madagascan' },
    { NationalityID: 103, CountryCode: 'MW', Nationality: 'Malawian' },
    { NationalityID: 104, CountryCode: 'MY', Nationality: 'Malaysian' },
    { NationalityID: 105, CountryCode: 'MV', Nationality: 'Maldivian' },
    { NationalityID: 106, CountryCode: 'ML', Nationality: 'Malian' },
    { NationalityID: 107, CountryCode: 'MT', Nationality: 'Maltese' },
    { NationalityID: 108, CountryCode: 'MR', Nationality: 'Mauritanian' },
    { NationalityID: 109, CountryCode: 'MU', Nationality: 'Mauritian' },
    { NationalityID: 110, CountryCode: 'MC', Nationality: 'Monacan' },
    { NationalityID: 111, CountryCode: 'MN', Nationality: 'Mongolian' },
    { NationalityID: 112, CountryCode: 'ME', Nationality: 'Montenegrin' },
    { NationalityID: 113, CountryCode: 'MA', Nationality: 'Moroccan' },
    { NationalityID: 114, CountryCode: 'MZ', Nationality: 'Mozambican' },
    { NationalityID: 25, CountryCode: 'MX', Nationality: 'Mexican' },
    { NationalityID: 115, CountryCode: 'NA', Nationality: 'Namibian' },
    { NationalityID: 116, CountryCode: 'NP', Nationality: 'Nepalese' },
    { NationalityID: 117, CountryCode: 'NZ', Nationality: 'New Zealand' },
    { NationalityID: 118, CountryCode: 'NI', Nationality: 'Nicaraguan' },
    { NationalityID: 119, CountryCode: 'NE', Nationality: 'Nigerien' },
    { NationalityID: 120, CountryCode: 'NG', Nationality: 'Nigerian' },
    { NationalityID: 121, CountryCode: 'NO', Nationality: 'Norwegian' },
    { NationalityID: 122, CountryCode: 'OM', Nationality: 'Omani' },
    { NationalityID: 123, CountryCode: 'PK', Nationality: 'Pakistani' },
    { NationalityID: 124, CountryCode: 'PA', Nationality: 'Panamanian' },
    { NationalityID: 125, CountryCode: 'PG', Nationality: 'Guinean' },
    { NationalityID: 126, CountryCode: 'PY', Nationality: 'Paraguayan' },
    { NationalityID: 127, CountryCode: 'PE', Nationality: 'Peruvian' },
    { NationalityID: 27, CountryCode: 'PH', Nationality: 'Philippine' },
    { NationalityID: 128, CountryCode: 'PL', Nationality: 'Polish' },
    { NationalityID: 129, CountryCode: 'PT', Nationality: 'Portuguese' },
    { NationalityID: 130, CountryCode: 'QA', Nationality: 'Qatari' },
    { NationalityID: 131, CountryCode: 'RO', Nationality: 'Romanian' },
    { NationalityID: 132, CountryCode: 'RW', Nationality: 'Rwandan' },
    { NationalityID: 13, CountryCode: 'SV', Nationality: 'Salvadorean' },
    { NationalityID: 37, CountryCode: 'AS', Nationality: 'Samoan' },
    { NationalityID: 133, CountryCode: 'SA', Nationality: 'Saudi Arabian' },
    { NationalityID: 134, CountryCode: 'SN', Nationality: 'Senegalese' },
    { NationalityID: 135, CountryCode: 'RS', Nationality: 'Serbian' },
    { NationalityID: 136, CountryCode: 'SL', Nationality: 'Sierra Leonian' },
    { NationalityID: 137, CountryCode: 'SG', Nationality: 'Singaporean' },
    { NationalityID: 138, CountryCode: 'SK', Nationality: 'Slovak' },
    { NationalityID: 139, CountryCode: 'SI', Nationality: 'Slovenian' },
    { NationalityID: 140, CountryCode: 'SB', Nationality: 'Slomoni' },
    { NationalityID: 141, CountryCode: 'SO', Nationality: 'Somali' },
    { NationalityID: 142, CountryCode: 'ZA', Nationality: 'South African' },
    { NationalityID: 24, CountryCode: 'KR', Nationality: 'South Korean' },
    { NationalityID: 28, CountryCode: 'ES', Nationality: 'Spanish' },
    { NationalityID: 29, CountryCode: 'SE', Nationality: 'Swedish' },
    { NationalityID: 30, CountryCode: 'CH', Nationality: 'Swiss' },
    { NationalityID: 143, CountryCode: 'LK', Nationality: 'Sri Lankan' },
    { NationalityID: 144, CountryCode: 'SD', Nationality: 'Sudanese' },
    { NationalityID: 145, CountryCode: 'SR', Nationality: 'Surinamese' },
    { NationalityID: 146, CountryCode: 'SZ', Nationality: 'Swazi' },
    { NationalityID: 31, CountryCode: 'TW', Nationality: 'Taiwanese' },
    { NationalityID: 147, CountryCode: 'TJ', Nationality: 'Tajik' },
    { NationalityID: 148, CountryCode: 'TH', Nationality: 'Thai' },
    { NationalityID: 149, CountryCode: 'TG', Nationality: 'Togolese' },
    { NationalityID: 150, CountryCode: 'TT', Nationality: 'Trinidadian' },
    { NationalityID: 151, CountryCode: 'TN', Nationality: 'Tunisian' },
    { NationalityID: 152, CountryCode: 'TR', Nationality: 'Turkish' },
    { NationalityID: 153, CountryCode: 'TM', Nationality: 'Turkoman' },
    { NationalityID: 154, CountryCode: 'TV', Nationality: 'Tuvaluan' },
    { NationalityID: 155, CountryCode: 'UG', Nationality: 'Ugandan' },
    { NationalityID: 156, CountryCode: 'UA', Nationality: 'Ukrainian' },
    { NationalityID: 157, CountryCode: 'AE', Nationality: 'Emirati' },
    { NationalityID: 32, CountryCode: 'VE', Nationality: 'Venezuelan' },
    { NationalityID: 33, CountryCode: 'VN', Nationality: 'Vietnamese' },
    { NationalityID: 159, CountryCode: 'UY', Nationality: 'Uruguayan' },
    { NationalityID: 160, CountryCode: 'UZ', Nationality: 'Uzbek' },
    { NationalityID: 161, CountryCode: 'VU', Nationality: 'Vanuatuan' },
    { NationalityID: 162, CountryCode: 'YE', Nationality: 'Yemeni' },
    { NationalityID: 163, CountryCode: 'ZM', Nationality: 'Zambian' }
  ];

  constructor(private caseService: CaseService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
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
    if (this.casee.name == null) {
      this.checked = true;
      this.msgs = 'name is required';
    } else if (this.casee.governorate== null) {
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
      if(this.cases){
        this.selectedCase = this.cases.find(b => b.name === this.casee.name)!;
      }
      if (this.selectedCase && this.action != 'edit') {
        this.isExist = true;
        this.selectedCase = new Case();
        this.msgs = 'this Case Name already exists';
      }
      else{
        //If there is no case id then it is an add case call else it is an edit case call
        if (this.casee.id == null) {
          this.caseService.addCase(this.casee).subscribe(
            (caseee) => {
              // this.clicked = true;
              this.caseAddedEvent.emit();
              this.router.navigate(['pages', 'cases']);
            }
          );
        } else {
          this.caseService.updateCase(this.casee).subscribe(
            (project) => {
              this.caseAddedEvent.emit();
              this.router.navigate(['pages', 'cases']);
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
}
