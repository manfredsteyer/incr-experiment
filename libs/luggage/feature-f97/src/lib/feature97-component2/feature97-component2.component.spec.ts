import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component2Component } from './feature97-component2.component';

describe('Feature97Component2Component', () => {
  let component: Feature97Component2Component;
  let fixture: ComponentFixture<Feature97Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
