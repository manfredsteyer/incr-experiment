import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component28Component } from './feature60-component28.component';

describe('Feature60Component28Component', () => {
  let component: Feature60Component28Component;
  let fixture: ComponentFixture<Feature60Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
