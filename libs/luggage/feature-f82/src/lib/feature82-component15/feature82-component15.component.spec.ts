import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component15Component } from './feature82-component15.component';

describe('Feature82Component15Component', () => {
  let component: Feature82Component15Component;
  let fixture: ComponentFixture<Feature82Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
