import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component3Component } from './feature8-component3.component';

describe('Feature8Component3Component', () => {
  let component: Feature8Component3Component;
  let fixture: ComponentFixture<Feature8Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
