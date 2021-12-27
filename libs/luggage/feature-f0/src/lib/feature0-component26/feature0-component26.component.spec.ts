import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component26Component } from './feature0-component26.component';

describe('Feature0Component26Component', () => {
  let component: Feature0Component26Component;
  let fixture: ComponentFixture<Feature0Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
