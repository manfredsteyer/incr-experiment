import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component28Component } from './feature73-component28.component';

describe('Feature73Component28Component', () => {
  let component: Feature73Component28Component;
  let fixture: ComponentFixture<Feature73Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
