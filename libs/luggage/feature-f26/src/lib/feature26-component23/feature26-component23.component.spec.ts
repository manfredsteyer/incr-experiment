import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component23Component } from './feature26-component23.component';

describe('Feature26Component23Component', () => {
  let component: Feature26Component23Component;
  let fixture: ComponentFixture<Feature26Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
