import {HttpClient} from "@angular/common/http";

import {Injectable} from "@angular/core";
import {Case} from "../model/Case";

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  constructor(private _httpClient: HttpClient) {
  }

  getCasesList() {
    return this._httpClient.get<Case[]>('http://localhost:8888/cases/get');
  }

  addCase(newCase: Case) {
    return this._httpClient.post<Case>('http://localhost:8888/cases/add', newCase);
  }

  getCasesDonationList() {
    return this._httpClient.get<any[]>('http://localhost:8888/cases/donations/get');
  }

  deleteCase(id:any) {
    return this._httpClient.delete<Case>('http://localhost:8888/cases/' + id);
  }

  updateCase(updatedCase: Case) {
    return this._httpClient.put<Case>('http://localhost:8888/cases/update', updatedCase);
  }
}
