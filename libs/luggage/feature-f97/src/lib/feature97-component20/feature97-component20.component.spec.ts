import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component20Component } from './feature97-component20.component';

describe('Feature97Component20Component', () => {
  let component: Feature97Component20Component;
  let fixture: ComponentFixture<Feature97Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
