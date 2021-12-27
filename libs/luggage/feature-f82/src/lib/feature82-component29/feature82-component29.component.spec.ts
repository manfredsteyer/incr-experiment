import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component29Component } from './feature82-component29.component';

describe('Feature82Component29Component', () => {
  let component: Feature82Component29Component;
  let fixture: ComponentFixture<Feature82Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
