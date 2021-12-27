import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component11Component } from './feature62-component11.component';

describe('Feature62Component11Component', () => {
  let component: Feature62Component11Component;
  let fixture: ComponentFixture<Feature62Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
