import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component26Component } from './feature51-component26.component';

describe('Feature51Component26Component', () => {
  let component: Feature51Component26Component;
  let fixture: ComponentFixture<Feature51Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
