import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component29Component } from './feature41-component29.component';

describe('Feature41Component29Component', () => {
  let component: Feature41Component29Component;
  let fixture: ComponentFixture<Feature41Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
