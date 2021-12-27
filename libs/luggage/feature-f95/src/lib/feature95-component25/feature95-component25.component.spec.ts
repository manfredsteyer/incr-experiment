import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component25Component } from './feature95-component25.component';

describe('Feature95Component25Component', () => {
  let component: Feature95Component25Component;
  let fixture: ComponentFixture<Feature95Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
