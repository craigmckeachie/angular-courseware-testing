import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectListComponent } from "./project-list.component";
import { HttpClientModule } from "@angular/common/http";
import { ProjectService } from "../shared/project.service";
import { DebugElement } from "@angular/core";
import Spy = jasmine.Spy;
import { of } from "rxjs/observable/of";
import { Project } from "../shared/project.model";
import { Observable } from "rxjs/Observable";
import { ReactiveFormsModule } from "@angular/forms";
import { ProjectsModule } from "../projects.module";
import { NavigationExtras, Router } from "@angular/router";

export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {}
}

describe("ProjectListComponent", () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  let debugElement: DebugElement;
  let element: HTMLElement;
  let projectService: ProjectService;
  let listMethodSpy: Spy;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [],
        imports: [HttpClientModule, ReactiveFormsModule, ProjectsModule],
        providers: [{ provide: Router, useClass: RouterStub }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
    projectService = debugElement.injector.get(ProjectService);

    listMethodSpy = spyOn(projectService, "list").and.returnValue(
      of([new Project({ name: "Matdexon" }), new Project({ name: "Kaylux" })])
    );

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("list should be called on service", () => {
    expect(listMethodSpy.calls.any()).toBe(true);
  });

  it(
    "should have projects",
    async(() => {
      fixture.whenStable().then(() => {
        expect(component.projects.length).toEqual(2);
        fixture.detectChanges();
        const textContent = element.textContent;
        expect(textContent).toContain("Matdexon");
        expect(textContent).toContain("Kaylux");
      });
    })
  );
});
