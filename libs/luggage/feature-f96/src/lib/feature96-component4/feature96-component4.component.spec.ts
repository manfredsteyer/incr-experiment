import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component4Component } from './feature96-component4.component';

describe('Feature96Component4Component', () => {
  let component: Feature96Component4Component;
  let fixture: ComponentFixture<Feature96Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
