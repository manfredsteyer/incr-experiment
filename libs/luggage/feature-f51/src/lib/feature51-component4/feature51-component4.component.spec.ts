import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component4Component } from './feature51-component4.component';

describe('Feature51Component4Component', () => {
  let component: Feature51Component4Component;
  let fixture: ComponentFixture<Feature51Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
