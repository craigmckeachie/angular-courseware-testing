import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  errorMessage: string;
  subscription: Subscription;
  paramsSubscription: Subscription;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      if (params['id'] != undefined) {
        let id = +params['id'];
        this.subscription = this.projectService
          .find(id)
          .subscribe(p => (this.project = p), e => (this.errorMessage = e));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }
}
