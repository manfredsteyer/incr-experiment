import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component15Component } from './feature38-component15.component';

describe('Feature38Component15Component', () => {
  let component: Feature38Component15Component;
  let fixture: ComponentFixture<Feature38Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
