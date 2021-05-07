import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCruiseComponent } from './view-cruise.component';

describe('ViewCruiseComponent', () => {
  let component: ViewCruiseComponent;
  let fixture: ComponentFixture<ViewCruiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCruiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
