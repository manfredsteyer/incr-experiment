import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component6Component } from './feature90-component6.component';

describe('Feature90Component6Component', () => {
  let component: Feature90Component6Component;
  let fixture: ComponentFixture<Feature90Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
