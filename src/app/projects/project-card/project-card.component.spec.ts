import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectCardComponent } from "./project-card.component";

describe("ProjectCardComponent", () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

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
    fixture.detectChanges();
  });

  it("should create", () => {
    debugger;
    expect(component).toBeTruthy();
  });
});
