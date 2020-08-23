import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component3Component } from './feature44-component3.component';

describe('Feature44Component3Component', () => {
  let component: Feature44Component3Component;
  let fixture: ComponentFixture<Feature44Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
