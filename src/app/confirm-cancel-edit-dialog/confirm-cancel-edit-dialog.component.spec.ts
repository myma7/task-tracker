import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCancelEditDialogComponent } from './confirm-cancel-edit-dialog.component';

describe('ConfirmCancelEditDialogComponent', () => {
  let component: ConfirmCancelEditDialogComponent;
  let fixture: ComponentFixture<ConfirmCancelEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCancelEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCancelEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
