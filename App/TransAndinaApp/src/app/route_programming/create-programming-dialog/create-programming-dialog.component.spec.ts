import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgrammingDialogComponent } from './create-programming-dialog.component';

describe('CreateProgrammingDialogComponent', () => {
  let component: CreateProgrammingDialogComponent;
  let fixture: ComponentFixture<CreateProgrammingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProgrammingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProgrammingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
