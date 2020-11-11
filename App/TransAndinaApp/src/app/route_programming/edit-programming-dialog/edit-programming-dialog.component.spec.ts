import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgrammingDialogComponent } from './edit-programming-dialog.component';

describe('EditProgrammingDialogComponent', () => {
  let component: EditProgrammingDialogComponent;
  let fixture: ComponentFixture<EditProgrammingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProgrammingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgrammingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
