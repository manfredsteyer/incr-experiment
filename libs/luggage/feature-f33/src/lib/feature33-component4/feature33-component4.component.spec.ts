import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component4Component } from './feature33-component4.component';

describe('Feature33Component4Component', () => {
  let component: Feature33Component4Component;
  let fixture: ComponentFixture<Feature33Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
