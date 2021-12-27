import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component14Component } from './feature49-component14.component';

describe('Feature49Component14Component', () => {
  let component: Feature49Component14Component;
  let fixture: ComponentFixture<Feature49Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature49Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
