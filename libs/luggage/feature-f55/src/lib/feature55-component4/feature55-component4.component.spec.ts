import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component4Component } from './feature55-component4.component';

describe('Feature55Component4Component', () => {
  let component: Feature55Component4Component;
  let fixture: ComponentFixture<Feature55Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature55Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
