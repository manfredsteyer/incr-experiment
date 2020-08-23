import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component29Component } from './feature44-component29.component';

describe('Feature44Component29Component', () => {
  let component: Feature44Component29Component;
  let fixture: ComponentFixture<Feature44Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
