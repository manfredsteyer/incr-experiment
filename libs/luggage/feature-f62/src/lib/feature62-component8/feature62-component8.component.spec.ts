import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component8Component } from './feature62-component8.component';

describe('Feature62Component8Component', () => {
  let component: Feature62Component8Component;
  let fixture: ComponentFixture<Feature62Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
