import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component5Component } from './feature38-component5.component';

describe('Feature38Component5Component', () => {
  let component: Feature38Component5Component;
  let fixture: ComponentFixture<Feature38Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
