import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component28Component } from './feature32-component28.component';

describe('Feature32Component28Component', () => {
  let component: Feature32Component28Component;
  let fixture: ComponentFixture<Feature32Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
