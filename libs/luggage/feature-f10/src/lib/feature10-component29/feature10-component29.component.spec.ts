import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component29Component } from './feature10-component29.component';

describe('Feature10Component29Component', () => {
  let component: Feature10Component29Component;
  let fixture: ComponentFixture<Feature10Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
