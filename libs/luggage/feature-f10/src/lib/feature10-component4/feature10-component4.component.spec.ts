import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component4Component } from './feature10-component4.component';

describe('Feature10Component4Component', () => {
  let component: Feature10Component4Component;
  let fixture: ComponentFixture<Feature10Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
