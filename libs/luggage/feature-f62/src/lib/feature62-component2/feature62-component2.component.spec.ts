import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component2Component } from './feature62-component2.component';

describe('Feature62Component2Component', () => {
  let component: Feature62Component2Component;
  let fixture: ComponentFixture<Feature62Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
