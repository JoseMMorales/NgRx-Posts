import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-post.component',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class FormPostComponent implements OnInit {
  formPost!: FormGroup;
  titleForm: string;
  buttonText: string;

  get isFormInvalid(): boolean {
    return this.formPost.invalid;
  }

  get titleHasErrors(): boolean {
    return (
      this.formPost.get('title')?.errors?.['required'] &&
      this.formPost.get('title')?.touched
    );
  }

  get bodyHasErrors(): boolean {
    return (
      this.formPost.get('body')?.errors?.['required'] &&
      this.formPost.get('body')?.touched
    );
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormPostComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { titleForm: string; buttonText: string }
  ) {
    this.titleForm = data.titleForm;
    this.buttonText = data.buttonText;
  }

  ngOnInit() {
    this.initializeForm();
  }

  saveDialogFormPost(): void {
    this.dialogRef.close(this.formPost?.value);
  }

  closeDialogFormPost(): void {
    this.dialogRef.close();
  }

  private initializeForm(): void {
    this.formPost = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
}
