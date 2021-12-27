import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component4Component } from './feature39-component4.component';

describe('Feature39Component4Component', () => {
  let component: Feature39Component4Component;
  let fixture: ComponentFixture<Feature39Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
