import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component11Component } from './feature97-component11.component';

describe('Feature97Component11Component', () => {
  let component: Feature97Component11Component;
  let fixture: ComponentFixture<Feature97Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
