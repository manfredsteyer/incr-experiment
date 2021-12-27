import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component4Component } from './feature76-component4.component';

describe('Feature76Component4Component', () => {
  let component: Feature76Component4Component;
  let fixture: ComponentFixture<Feature76Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
