import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component8Component } from './feature38-component8.component';

describe('Feature38Component8Component', () => {
  let component: Feature38Component8Component;
  let fixture: ComponentFixture<Feature38Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
