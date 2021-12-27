import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component0Component } from './feature26-component0.component';

describe('Feature26Component0Component', () => {
  let component: Feature26Component0Component;
  let fixture: ComponentFixture<Feature26Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
