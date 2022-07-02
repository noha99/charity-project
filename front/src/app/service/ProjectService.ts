import {HttpClient} from "@angular/common/http";

import {Injectable} from "@angular/core";
import {Project} from "../model/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private _httpClient: HttpClient) {
  }

  getProjectsList() {
    return this._httpClient.get<Project[]>('http://localhost:8888/projects/get');
  }

  getProjectsDonationList() {
    return this._httpClient.get<any[]>('http://localhost:8888/projects/donations/get');
  }

  addProject(newProj: Project) {
    return this._httpClient.post<Project>('http://localhost:8888/projects/add', newProj);
  }

  deleteProject(id:any) {
    return this._httpClient.delete<Project>('http://localhost:8888/projects/' + id);
  }

  updateProject(updatedProject: Project) {
    return this._httpClient.put<Project>('http://localhost:8888/projects/update', updatedProject);
  }
}
