import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component19Component } from './feature9-component19.component';

describe('Feature9Component19Component', () => {
  let component: Feature9Component19Component;
  let fixture: ComponentFixture<Feature9Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
