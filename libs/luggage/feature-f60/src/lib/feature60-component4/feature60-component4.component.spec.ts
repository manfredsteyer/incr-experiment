import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component4Component } from './feature60-component4.component';

describe('Feature60Component4Component', () => {
  let component: Feature60Component4Component;
  let fixture: ComponentFixture<Feature60Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
