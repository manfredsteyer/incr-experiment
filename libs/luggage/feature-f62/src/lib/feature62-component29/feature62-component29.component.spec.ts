import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component29Component } from './feature62-component29.component';

describe('Feature62Component29Component', () => {
  let component: Feature62Component29Component;
  let fixture: ComponentFixture<Feature62Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
