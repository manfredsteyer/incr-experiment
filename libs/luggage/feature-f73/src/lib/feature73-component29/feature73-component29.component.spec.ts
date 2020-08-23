import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component29Component } from './feature73-component29.component';

describe('Feature73Component29Component', () => {
  let component: Feature73Component29Component;
  let fixture: ComponentFixture<Feature73Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
