import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component23Component } from './feature62-component23.component';

describe('Feature62Component23Component', () => {
  let component: Feature62Component23Component;
  let fixture: ComponentFixture<Feature62Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
