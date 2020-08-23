import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component7Component } from './feature82-component7.component';

describe('Feature82Component7Component', () => {
  let component: Feature82Component7Component;
  let fixture: ComponentFixture<Feature82Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
