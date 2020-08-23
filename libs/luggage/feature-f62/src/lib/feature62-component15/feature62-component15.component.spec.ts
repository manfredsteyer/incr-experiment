import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component15Component } from './feature62-component15.component';

describe('Feature62Component15Component', () => {
  let component: Feature62Component15Component;
  let fixture: ComponentFixture<Feature62Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
