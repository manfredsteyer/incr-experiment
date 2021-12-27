import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component28Component } from './feature16-component28.component';

describe('Feature16Component28Component', () => {
  let component: Feature16Component28Component;
  let fixture: ComponentFixture<Feature16Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature16Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
