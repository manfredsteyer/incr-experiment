import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component26Component } from './feature62-component26.component';

describe('Feature62Component26Component', () => {
  let component: Feature62Component26Component;
  let fixture: ComponentFixture<Feature62Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
