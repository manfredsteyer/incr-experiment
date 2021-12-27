import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component26Component } from './feature60-component26.component';

describe('Feature60Component26Component', () => {
  let component: Feature60Component26Component;
  let fixture: ComponentFixture<Feature60Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
