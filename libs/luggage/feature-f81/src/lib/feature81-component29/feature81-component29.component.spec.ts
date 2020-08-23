import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component29Component } from './feature81-component29.component';

describe('Feature81Component29Component', () => {
  let component: Feature81Component29Component;
  let fixture: ComponentFixture<Feature81Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
