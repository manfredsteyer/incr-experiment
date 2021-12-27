import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component25Component } from './feature55-component25.component';

describe('Feature55Component25Component', () => {
  let component: Feature55Component25Component;
  let fixture: ComponentFixture<Feature55Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature55Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
