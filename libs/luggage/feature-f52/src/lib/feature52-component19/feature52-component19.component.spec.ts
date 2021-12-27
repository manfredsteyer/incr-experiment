import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component19Component } from './feature52-component19.component';

describe('Feature52Component19Component', () => {
  let component: Feature52Component19Component;
  let fixture: ComponentFixture<Feature52Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
