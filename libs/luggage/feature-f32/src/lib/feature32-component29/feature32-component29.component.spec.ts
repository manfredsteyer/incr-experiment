import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component29Component } from './feature32-component29.component';

describe('Feature32Component29Component', () => {
  let component: Feature32Component29Component;
  let fixture: ComponentFixture<Feature32Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
