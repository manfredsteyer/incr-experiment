import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component3Component } from './feature82-component3.component';

describe('Feature82Component3Component', () => {
  let component: Feature82Component3Component;
  let fixture: ComponentFixture<Feature82Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
