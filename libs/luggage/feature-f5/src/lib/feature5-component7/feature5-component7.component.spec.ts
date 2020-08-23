import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component7Component } from './feature5-component7.component';

describe('Feature5Component7Component', () => {
  let component: Feature5Component7Component;
  let fixture: ComponentFixture<Feature5Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
