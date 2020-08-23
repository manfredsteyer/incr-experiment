import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component8Component } from './feature44-component8.component';

describe('Feature44Component8Component', () => {
  let component: Feature44Component8Component;
  let fixture: ComponentFixture<Feature44Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
