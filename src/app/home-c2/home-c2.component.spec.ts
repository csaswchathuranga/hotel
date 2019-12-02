import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeC2Component } from './home-c2.component';

describe('HomeC2Component', () => {
  let component: HomeC2Component;
  let fixture: ComponentFixture<HomeC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
