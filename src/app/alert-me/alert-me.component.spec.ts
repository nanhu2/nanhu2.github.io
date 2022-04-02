import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMeComponent } from './alert-me.component';

describe('AlertMeComponent', () => {
  let component: AlertMeComponent;
  let fixture: ComponentFixture<AlertMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
