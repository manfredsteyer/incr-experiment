import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component19Component } from './feature74-component19.component';

describe('Feature74Component19Component', () => {
  let component: Feature74Component19Component;
  let fixture: ComponentFixture<Feature74Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
