import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectCardComponent } from "./project-card.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Project } from "../shared/project.model";

describe("ProjectCardComponent", () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  let headerElement: HTMLElement;
  let projectDetailDivElement: HTMLElement;
  let editAnchorDebugElement: DebugElement;
  let expectedProject: Project;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ProjectCardComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;

    headerElement = fixture.debugElement.query(By.css("h4")).nativeElement;
    projectDetailDivElement = fixture.debugElement.query(
      By.css("div.project-detail")
    ).nativeElement;

    editAnchorDebugElement = fixture.debugElement.query(By.css(".edit-action"));

    expectedProject = new Project({
      id: 15,
      name: "Mission Impossible",
      description: "This is really hard.",
      editing: false
    });
    component.project = expectedProject;
    fixture.detectChanges();
  });

  it("should create", () => {
    // debugger;
    expect(component).toBeTruthy();
  });

  it("header should be project name ", () => {
    expect(headerElement.innerText).toBe(expectedProject.name);
  });

  it("div should have project description", () => {
    expect(projectDetailDivElement.textContent).toContain(
      expectedProject.description
    );
  });
});
