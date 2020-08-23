import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component1Component } from './feature62-component1.component';

describe('Feature62Component1Component', () => {
  let component: Feature62Component1Component;
  let fixture: ComponentFixture<Feature62Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
