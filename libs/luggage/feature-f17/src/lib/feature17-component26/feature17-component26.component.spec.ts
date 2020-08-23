import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component26Component } from './feature17-component26.component';

describe('Feature17Component26Component', () => {
  let component: Feature17Component26Component;
  let fixture: ComponentFixture<Feature17Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
