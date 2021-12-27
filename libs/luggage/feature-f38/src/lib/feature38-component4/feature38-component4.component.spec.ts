import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component4Component } from './feature38-component4.component';

describe('Feature38Component4Component', () => {
  let component: Feature38Component4Component;
  let fixture: ComponentFixture<Feature38Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
