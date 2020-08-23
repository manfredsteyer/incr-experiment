import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component5Component } from './feature77-component5.component';

describe('Feature77Component5Component', () => {
  let component: Feature77Component5Component;
  let fixture: ComponentFixture<Feature77Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
