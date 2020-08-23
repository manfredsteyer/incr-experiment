import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component25Component } from './feature17-component25.component';

describe('Feature17Component25Component', () => {
  let component: Feature17Component25Component;
  let fixture: ComponentFixture<Feature17Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
