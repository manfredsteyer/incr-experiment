import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component19Component } from './feature45-component19.component';

describe('Feature45Component19Component', () => {
  let component: Feature45Component19Component;
  let fixture: ComponentFixture<Feature45Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
