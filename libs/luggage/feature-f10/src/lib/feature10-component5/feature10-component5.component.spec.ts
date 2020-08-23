import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component5Component } from './feature10-component5.component';

describe('Feature10Component5Component', () => {
  let component: Feature10Component5Component;
  let fixture: ComponentFixture<Feature10Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
