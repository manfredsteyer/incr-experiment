import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component28Component } from './feature82-component28.component';

describe('Feature82Component28Component', () => {
  let component: Feature82Component28Component;
  let fixture: ComponentFixture<Feature82Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
