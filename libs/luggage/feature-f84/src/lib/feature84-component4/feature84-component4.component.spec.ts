import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component4Component } from './feature84-component4.component';

describe('Feature84Component4Component', () => {
  let component: Feature84Component4Component;
  let fixture: ComponentFixture<Feature84Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
