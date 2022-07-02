import {HttpClient} from "@angular/common/http";

import {Injectable} from "@angular/core";
import {Donation} from "../model/Donation";

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  constructor(private _httpClient: HttpClient) {
  }

  getDonationList() {
    return this._httpClient.get<Donation[]>('http://localhost:8888/donations/get');
  }

  addDonation(newDonation: Donation) {
    return this._httpClient.post<Donation>('http://localhost:8888/donations/add', newDonation);
  }

  deleteDonation(id:any) {
    return this._httpClient.delete<Donation>('http://localhost:8888/donations/' + id);
  }

  updateDonation(updatedDonation: Donation) {
    return this._httpClient.put<Donation>('http://localhost:8888/donations/update', updatedDonation);
  }

}
