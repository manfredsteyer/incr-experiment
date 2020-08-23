import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component4Component } from './feature85-component4.component';

describe('Feature85Component4Component', () => {
  let component: Feature85Component4Component;
  let fixture: ComponentFixture<Feature85Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
