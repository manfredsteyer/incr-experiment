import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component5Component } from './feature62-component5.component';

describe('Feature62Component5Component', () => {
  let component: Feature62Component5Component;
  let fixture: ComponentFixture<Feature62Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
