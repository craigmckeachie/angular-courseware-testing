import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  errorMessage: string;
  projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService
      .list()
      .subscribe(
        projects => (this.projects = projects),
        error => (this.errorMessage = error)
      );
  }

  onEdit(project) {
    project.editing = true;
  }

  onSave(updatedProject) {
    updatedProject.editing = false;
    this.projectService.put(updatedProject).subscribe(p => {
      let index = this.projects.findIndex(p => p.id == updatedProject.id);
      this.projects[index] = updatedProject;
    }, error => (this.errorMessage = error));
  }

  onCancel(project) {
    project.editing = false;
  }

  onDelete(project: Project) {
    this.projectService
      .delete(project)
      .subscribe(
        () => (this.projects = this.projects.filter(p => p.id != project.id)),
        error => (this.errorMessage = error)
      );
  }
}
