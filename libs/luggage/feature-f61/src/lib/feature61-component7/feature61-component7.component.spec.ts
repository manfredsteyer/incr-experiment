import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component7Component } from './feature61-component7.component';

describe('Feature61Component7Component', () => {
  let component: Feature61Component7Component;
  let fixture: ComponentFixture<Feature61Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
