import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component4Component } from './feature44-component4.component';

describe('Feature44Component4Component', () => {
  let component: Feature44Component4Component;
  let fixture: ComponentFixture<Feature44Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
