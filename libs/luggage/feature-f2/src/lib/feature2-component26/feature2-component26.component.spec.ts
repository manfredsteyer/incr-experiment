import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component26Component } from './feature2-component26.component';

describe('Feature2Component26Component', () => {
  let component: Feature2Component26Component;
  let fixture: ComponentFixture<Feature2Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
