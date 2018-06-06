import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListComponent } from './project-list.component';
import { NavigationExtras } from '@angular/router/src/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsModule } from '../projects.module';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { of } from 'rxjs';
import { Project } from '../shared/project.model';
import Spy = jasmine.Spy;

export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {}
}

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  let debugElement: DebugElement;
  let element: HTMLElement;
  let projectService: ProjectService;
  let listMethodSpy: Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule, ReactiveFormsModule, ProjectsModule],
      providers: [{ provide: Router, useClass: RouterStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
    projectService = debugElement.injector.get(ProjectService);

    listMethodSpy = spyOn(projectService, 'list').and.returnValue(
      of([new Project({ name: 'Matdexon' }), new Project({ name: 'Kaylux' })])
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('list should be called on service', () => {
    expect(listMethodSpy.calls.any()).toBe(true);
  });

  it('should have projects', async(() => {
    expect(component.projects.length).toEqual(2);
    fixture.detectChanges();
    const textContent = element.textContent;
    expect(textContent).toContain('Matdexon');
    expect(textContent).toContain('Kaylux');
  }));
});
