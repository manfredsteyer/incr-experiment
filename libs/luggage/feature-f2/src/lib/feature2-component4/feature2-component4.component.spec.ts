import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component4Component } from './feature2-component4.component';

describe('Feature2Component4Component', () => {
  let component: Feature2Component4Component;
  let fixture: ComponentFixture<Feature2Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
