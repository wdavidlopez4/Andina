import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgrammingDialogComponent } from './add-programming-dialog.component';

describe('AddProgrammingDialogComponent', () => {
  let component: AddProgrammingDialogComponent;
  let fixture: ComponentFixture<AddProgrammingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProgrammingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgrammingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
