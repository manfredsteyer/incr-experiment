import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component28Component } from './feature62-component28.component';

describe('Feature62Component28Component', () => {
  let component: Feature62Component28Component;
  let fixture: ComponentFixture<Feature62Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
