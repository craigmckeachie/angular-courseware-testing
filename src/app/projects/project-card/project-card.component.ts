import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../shared/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project = new Project();
  @Output() edit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();
  actionDropdownIsOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  getDropdownCssClasses() {
    return {
      dropdown: true,
      open: this.actionDropdownIsOpen,
    };
  }

  toggleActions() {
    this.actionDropdownIsOpen = !this.actionDropdownIsOpen;
  }

  onEdit(project: Project, event) {
    event.preventDefault();
    this.edit.emit(project);
  }

  onDelete(project: Project, event) {
    event.preventDefault();
    this.delete.emit(project);
  }

  onSelect(project: Project, event) {
    event.preventDefault();
    this.router.navigate(['/projects', project.id]);
  }
}
