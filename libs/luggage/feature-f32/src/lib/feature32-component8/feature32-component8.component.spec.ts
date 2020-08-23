import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component8Component } from './feature32-component8.component';

describe('Feature32Component8Component', () => {
  let component: Feature32Component8Component;
  let fixture: ComponentFixture<Feature32Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
