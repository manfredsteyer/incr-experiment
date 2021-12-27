import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component4Component } from './feature32-component4.component';

describe('Feature32Component4Component', () => {
  let component: Feature32Component4Component;
  let fixture: ComponentFixture<Feature32Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature32Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
