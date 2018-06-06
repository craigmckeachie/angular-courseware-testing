import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';

import { ProjectCardComponent } from './project-card.component';
import { DebugElement } from '@angular/core';
import { Project } from '../shared/project.model';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router/src/router';

export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {}
}

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  let headerElement: HTMLElement;
  let projectDetailDivElement: HTMLElement;
  let editAnchorDebugElement: DebugElement;
  let expectedProject: Project;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardComponent],
      providers: [{ provide: Router, useClass: RouterStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;

    headerElement = fixture.debugElement.query(By.css('h4')).nativeElement;
    projectDetailDivElement = fixture.debugElement.query(
      By.css('div.project-detail')
    ).nativeElement;

    editAnchorDebugElement = fixture.debugElement.query(By.css('.edit-action'));

    expectedProject = new Project({
      id: 15,
      name: 'Mission Impossible',
      description: 'This is really hard.',
      editing: false,
    });
    component.project = expectedProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('header should have project name', () => {
    expect(headerElement.innerText).toEqual(expectedProject.name);
  });

  it('div should have project description', () => {
    expect(projectDetailDivElement.textContent).toContain(
      expectedProject.description
    );
  });

  it('should raise edit event when edit clicked', () => {
    let projectBeingEdited: Project;

    component.edit.subscribe((project: Project) => {
      projectBeingEdited = project;
    });

    editAnchorDebugElement.triggerEventHandler('click', {
      preventDefault: () => {},
    });

    expect(projectBeingEdited).toBe(expectedProject);
  });

  it('should tell Router to navigate when clicked', inject(
    [Router],
    (router: Router) => {
      const navigateSpy = spyOn(router, 'navigate');
      headerElement.click();

      const navigateArguments = navigateSpy.calls.first().args[0];

      expect(navigateArguments).toEqual(['/projects', component.project.id]);
    }
  ));
});
