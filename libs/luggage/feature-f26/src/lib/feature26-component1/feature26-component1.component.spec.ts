import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component1Component } from './feature26-component1.component';

describe('Feature26Component1Component', () => {
  let component: Feature26Component1Component;
  let fixture: ComponentFixture<Feature26Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
