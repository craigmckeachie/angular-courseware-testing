import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { _throw } from "rxjs/observable/throw";
import { HttpErrorResponse } from "@angular/common/http";

import { Project } from "./project.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
export const PROJECTS_URL = "http://localhost:3000/projects/";

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  find(id: number): Observable<Project> {
    const url = PROJECTS_URL + id;
    return this.http.get<Project>(url);
  }

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(PROJECTS_URL).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return _throw("An error occurred loading the projects.");
      })
    );
  }

  put(project: Project): Observable<Project> {
    const url = PROJECTS_URL + project.id;
    return this.http.put<Project>(url, project, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return _throw("An error occurred updating the project.");
      })
    );
  }

  delete(project: Project): Observable<Project> {
    const url = PROJECTS_URL + project.id;
    return this.http.delete<Project>(url, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return _throw("An error occurred deleting the project.");
      })
    );
  }
}
