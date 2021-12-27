import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component26Component } from './feature15-component26.component';

describe('Feature15Component26Component', () => {
  let component: Feature15Component26Component;
  let fixture: ComponentFixture<Feature15Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
