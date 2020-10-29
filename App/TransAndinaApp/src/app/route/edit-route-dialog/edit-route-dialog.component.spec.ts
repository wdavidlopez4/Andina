import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRouteDialogComponent } from './edit-route-dialog.component';

describe('EditRouteDialogComponent', () => {
  let component: EditRouteDialogComponent;
  let fixture: ComponentFixture<EditRouteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRouteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRouteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
