import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component4Component } from './feature62-component4.component';

describe('Feature62Component4Component', () => {
  let component: Feature62Component4Component;
  let fixture: ComponentFixture<Feature62Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
