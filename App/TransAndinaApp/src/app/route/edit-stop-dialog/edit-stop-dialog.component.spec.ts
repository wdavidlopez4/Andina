import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStopDialogComponent } from './edit-stop-dialog.component';

describe('EditStopDialogComponent', () => {
  let component: EditStopDialogComponent;
  let fixture: ComponentFixture<EditStopDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStopDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStopDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
