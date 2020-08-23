import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component7Component } from './feature37-component7.component';

describe('Feature37Component7Component', () => {
  let component: Feature37Component7Component;
  let fixture: ComponentFixture<Feature37Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
