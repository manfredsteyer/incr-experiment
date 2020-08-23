import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component29Component } from './feature38-component29.component';

describe('Feature38Component29Component', () => {
  let component: Feature38Component29Component;
  let fixture: ComponentFixture<Feature38Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
