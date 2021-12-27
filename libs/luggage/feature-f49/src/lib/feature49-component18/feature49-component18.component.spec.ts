import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component18Component } from './feature49-component18.component';

describe('Feature49Component18Component', () => {
  let component: Feature49Component18Component;
  let fixture: ComponentFixture<Feature49Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature49Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
