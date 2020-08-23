import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component29Component } from './feature25-component29.component';

describe('Feature25Component29Component', () => {
  let component: Feature25Component29Component;
  let fixture: ComponentFixture<Feature25Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
