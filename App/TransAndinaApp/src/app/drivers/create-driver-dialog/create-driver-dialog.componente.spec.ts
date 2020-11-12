import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiverDialogComponent } from './create-driver-dialog.component';

describe('CreateDriverDialogComponent', () => {
  let component: CreateDiverDialogComponent;
  let fixture: ComponentFixture<CreateDiverDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiverDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
