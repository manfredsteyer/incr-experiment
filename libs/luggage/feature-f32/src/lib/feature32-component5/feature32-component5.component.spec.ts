import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component5Component } from './feature32-component5.component';

describe('Feature32Component5Component', () => {
  let component: Feature32Component5Component;
  let fixture: ComponentFixture<Feature32Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
