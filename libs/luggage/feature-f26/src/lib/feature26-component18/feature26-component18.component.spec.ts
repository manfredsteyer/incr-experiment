import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component18Component } from './feature26-component18.component';

describe('Feature26Component18Component', () => {
  let component: Feature26Component18Component;
  let fixture: ComponentFixture<Feature26Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
