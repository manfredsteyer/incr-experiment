import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component28Component } from './feature46-component28.component';

describe('Feature46Component28Component', () => {
  let component: Feature46Component28Component;
  let fixture: ComponentFixture<Feature46Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
