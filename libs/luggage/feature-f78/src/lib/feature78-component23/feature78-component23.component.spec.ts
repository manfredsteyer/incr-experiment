import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component23Component } from './feature78-component23.component';

describe('Feature78Component23Component', () => {
  let component: Feature78Component23Component;
  let fixture: ComponentFixture<Feature78Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
