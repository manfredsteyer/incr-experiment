import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component4Component } from './feature88-component4.component';

describe('Feature88Component4Component', () => {
  let component: Feature88Component4Component;
  let fixture: ComponentFixture<Feature88Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
