import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component8Component } from './feature94-component8.component';

describe('Feature94Component8Component', () => {
  let component: Feature94Component8Component;
  let fixture: ComponentFixture<Feature94Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
