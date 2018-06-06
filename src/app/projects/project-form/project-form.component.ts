import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../shared/project.model';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  @Input() project: Project;
  @Output() cancel = new EventEmitter<Project>();
  @Output() save = new EventEmitter<Project>();
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: [this.project.name, [Validators.required, Validators.minLength(3)]],
      description: [this.project.description],
      isActive: [this.project.isActive],
    });
  }

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 3 characters long.',
    },
    description: {
      required: 'Description is required.',
    },
  };

  hasAnyError(control: AbstractControl) {
    return control.invalid && control.dirty && control.touched;
  }

  getValidationMessages(controlName: string): string[] {
    let formControl = this.projectForm.get(controlName);
    if (!formControl.errors) {
      return [];
    }
    return Object.keys(formControl.errors).map(key => {
      return this.validationMessages[controlName][key];
    });
  }

  onSave() {
    if (this.projectForm.invalid) {
      return;
    }
    let updatedProject = Object.assign(
      {},
      this.project,
      this.projectForm.value
    );
    this.save.emit(updatedProject);
  }

  onCancel(project, event) {
    event.preventDefault();
    this.cancel.emit(this.project);
  }
}
