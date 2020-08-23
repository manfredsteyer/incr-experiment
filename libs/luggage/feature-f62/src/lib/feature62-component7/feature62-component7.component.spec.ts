import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component7Component } from './feature62-component7.component';

describe('Feature62Component7Component', () => {
  let component: Feature62Component7Component;
  let fixture: ComponentFixture<Feature62Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
