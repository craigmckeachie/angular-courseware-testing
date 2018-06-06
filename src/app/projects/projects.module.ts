import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectService } from './shared/project.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ProjectsRoutingModule],
  declarations: [
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProjectDetailComponent,
  ],
  providers: [ProjectService],
})
export class ProjectsModule {}
