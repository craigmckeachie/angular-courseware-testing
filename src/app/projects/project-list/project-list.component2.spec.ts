import {
  TestBed,
  ComponentFixture,
  async,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { ProjectListComponent } from "./project-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ProjectsModule } from "../projects.module";
import { ProjectService } from "../shared/project.service";
import { HttpModule } from "@angular/http";

import { Project } from "../shared/project.model";
import { NavigationExtras, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { PROJECTS } from "../shared/mock-projects";

export class FakeProjectService {
  list(): Observable<Project[]> {
    return of(PROJECTS);
  }
}

export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {}
}

describe("ProjectListComponent", () => {
  let fixture: ComponentFixture<ProjectListComponent>;
  let component: ProjectListComponent;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, ProjectsModule],
        providers: [
          { provide: ProjectService, useClass: FakeProjectService },
          { provide: Router, useClass: RouterStub }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
  });

  it("should instantiate component", () => {
    expect(component instanceof ProjectListComponent).toBe(true);
  });

  it(
    "should have projects",
    async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.projects.length).toEqual(7);
      });
    })
  );

  it(
    "should have projects (using fakeAsync)",
    fakeAsync(() => {
      fixture.detectChanges();
      tick();
      expect(component.projects.length).toEqual(7);
    })
  );

  it(
    "should display project data",
    async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const textContent = element.textContent;
        expect(textContent).toContain("Matdexon");
        expect(textContent).toContain("Kaylux");
        expect(textContent).toContain("Remote Wrench");
        expect(textContent).toContain("Sed a fermentum diam.");
      });
    })
  );
});
