import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component3Component } from './feature62-component3.component';

describe('Feature62Component3Component', () => {
  let component: Feature62Component3Component;
  let fixture: ComponentFixture<Feature62Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
