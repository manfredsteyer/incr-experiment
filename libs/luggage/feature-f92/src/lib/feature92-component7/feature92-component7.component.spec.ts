import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component7Component } from './feature92-component7.component';

describe('Feature92Component7Component', () => {
  let component: Feature92Component7Component;
  let fixture: ComponentFixture<Feature92Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
