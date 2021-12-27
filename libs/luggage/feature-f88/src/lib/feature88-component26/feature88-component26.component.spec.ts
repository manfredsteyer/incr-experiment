import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component26Component } from './feature88-component26.component';

describe('Feature88Component26Component', () => {
  let component: Feature88Component26Component;
  let fixture: ComponentFixture<Feature88Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
