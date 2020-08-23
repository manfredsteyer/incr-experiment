import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component18Component } from './feature62-component18.component';

describe('Feature62Component18Component', () => {
  let component: Feature62Component18Component;
  let fixture: ComponentFixture<Feature62Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
