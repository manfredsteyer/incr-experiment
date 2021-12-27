import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component26Component } from './feature32-component26.component';

describe('Feature32Component26Component', () => {
  let component: Feature32Component26Component;
  let fixture: ComponentFixture<Feature32Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature32Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
