import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component23Component } from './feature94-component23.component';

describe('Feature94Component23Component', () => {
  let component: Feature94Component23Component;
  let fixture: ComponentFixture<Feature94Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
