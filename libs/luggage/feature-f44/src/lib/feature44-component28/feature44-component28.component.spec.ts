import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component28Component } from './feature44-component28.component';

describe('Feature44Component28Component', () => {
  let component: Feature44Component28Component;
  let fixture: ComponentFixture<Feature44Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
