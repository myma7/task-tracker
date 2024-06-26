import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 mat-dialog-title style="color: orange; font-weight: bold; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Confirmation</h1>
    <div mat-dialog-content>
      <p>Are you sure you want to delete the task with description "{{ data.description }}"?</p>
    </div>
    <div mat-dialog-actions  style="display: flex; justify-content: flex-end;">
    <button mat-button (click)="onNoClick()" style="color: black; background-color: red; font-weight: bold; ont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">No</button>
    <button mat-button [mat-dialog-close]="true" cdkFocusInitial style="color: black; background-color: green; font-weight: bold; display: flex; ont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Yes</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { description: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
