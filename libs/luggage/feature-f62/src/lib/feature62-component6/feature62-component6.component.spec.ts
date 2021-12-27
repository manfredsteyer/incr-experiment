import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component6Component } from './feature62-component6.component';

describe('Feature62Component6Component', () => {
  let component: Feature62Component6Component;
  let fixture: ComponentFixture<Feature62Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
