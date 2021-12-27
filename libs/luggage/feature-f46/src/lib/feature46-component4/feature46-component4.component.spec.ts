import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component4Component } from './feature46-component4.component';

describe('Feature46Component4Component', () => {
  let component: Feature46Component4Component;
  let fixture: ComponentFixture<Feature46Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
