import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewlistComponent } from './admin-reviewlist.component';

describe('AdminReviewlistComponent', () => {
  let component: AdminReviewlistComponent;
  let fixture: ComponentFixture<AdminReviewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReviewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
