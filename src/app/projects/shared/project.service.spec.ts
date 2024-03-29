import { TestBed, inject } from "@angular/core/testing";
import { PROJECTS_URL, ProjectService } from "./project.service";
import { HttpClient } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { PROJECTS } from "./mock-projects";

describe("ProjectService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectService]
    });
  });

  it(
    "should be created",
    inject([ProjectService], (service: ProjectService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    "should list projects",
    inject(
      [ProjectService, HttpClient, HttpTestingController],
      (
        service: ProjectService,
        http: HttpClient,
        httpMock: HttpTestingController
      ) => {
        service.list().subscribe(data => expect(data).toEqual(PROJECTS));
        const request = httpMock.expectOne(PROJECTS_URL);
        request.flush(PROJECTS);
      }
    )
  );

  it(
    "should return user friendly error on server error when listing projects",
    inject(
      [ProjectService, HttpClient, HttpTestingController],
      (
        service: ProjectService,
        http: HttpClient,
        httpMock: HttpTestingController
      ) => {
        const notFoundErrorResponse = { status: 404, statusText: "Not Found" };
        const content = "The requested URL was not found on the server.";
        service.list().subscribe(
          data => {},
          error => {
            expect(error).toEqual("An error occurred loading the projects.");
          }
        );
        const request = httpMock.expectOne(PROJECTS_URL);
        request.flush(content, notFoundErrorResponse);
      }
    )
  );

  //
  // it(
  //   "should return user friendly error on network error when listing projects",
  //   inject(
  //     [ProjectService, HttpClient, HttpTestingController],
  //     (
  //       service: ProjectService,
  //       http: HttpClient,
  //       httpMock: HttpTestingController
  //     ) => {
  //       const networkError = new ErrorEvent("http error");
  //       service.list().subscribe(
  //         data => expect(data).toEqual(PROJECTS),
  //         error => {
  //           expect(error).toEqual("An error occurred loading the projects.");
  //         }
  //       );
  //       const request = httpMock.expectOne(PROJECTS_URL);
  //       request.error(networkError);
  //     }
  //   )
  // );
  //
  // afterEach(
  //   inject([HttpTestingController], (httpMock: HttpTestingController) => {
  //     httpMock.verify();
  //   })
  // );
});
