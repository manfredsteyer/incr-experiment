import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component11Component } from './feature26-component11.component';

describe('Feature26Component11Component', () => {
  let component: Feature26Component11Component;
  let fixture: ComponentFixture<Feature26Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
