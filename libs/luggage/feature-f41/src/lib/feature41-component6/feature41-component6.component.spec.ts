import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component6Component } from './feature41-component6.component';

describe('Feature41Component6Component', () => {
  let component: Feature41Component6Component;
  let fixture: ComponentFixture<Feature41Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
