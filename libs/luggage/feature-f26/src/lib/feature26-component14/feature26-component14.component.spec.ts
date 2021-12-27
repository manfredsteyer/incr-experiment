import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component14Component } from './feature26-component14.component';

describe('Feature26Component14Component', () => {
  let component: Feature26Component14Component;
  let fixture: ComponentFixture<Feature26Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
