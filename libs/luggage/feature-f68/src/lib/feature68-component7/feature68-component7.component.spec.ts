import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component7Component } from './feature68-component7.component';

describe('Feature68Component7Component', () => {
  let component: Feature68Component7Component;
  let fixture: ComponentFixture<Feature68Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
