import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component15Component } from './feature32-component15.component';

describe('Feature32Component15Component', () => {
  let component: Feature32Component15Component;
  let fixture: ComponentFixture<Feature32Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
