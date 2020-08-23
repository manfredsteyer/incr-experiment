import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component26Component } from './feature1-component26.component';

describe('Feature1Component26Component', () => {
  let component: Feature1Component26Component;
  let fixture: ComponentFixture<Feature1Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
