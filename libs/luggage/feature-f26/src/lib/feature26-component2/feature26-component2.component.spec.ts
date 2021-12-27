import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component2Component } from './feature26-component2.component';

describe('Feature26Component2Component', () => {
  let component: Feature26Component2Component;
  let fixture: ComponentFixture<Feature26Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
