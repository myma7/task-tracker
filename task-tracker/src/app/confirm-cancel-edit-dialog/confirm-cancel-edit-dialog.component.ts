import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-cancel-edit-dialog',
  template: `
    <h1 mat-dialog-title style="color: orange; font-weight: bold;">Cancel Edit</h1>
    <div mat-dialog-content>
      <p>Are you sure you want to cancel editing the task with description "{{ data.description }}"?</p>
    </div>
    <div mat-dialog-actions style="display: flex; justify-content: flex-end;">
      <button mat-button (click)="onNoClick()" style="color: black; background-color: red; font-weight: bold;">No</button>
      <button mat-button (click)="onYesClick()" [mat-dialog-close]="true" cdkFocusInitial style="color: black; background-color: green; font-weight: bold;">Yes</button>
    </div>
  `,
})
export class ConfirmCancelEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmCancelEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { description: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}