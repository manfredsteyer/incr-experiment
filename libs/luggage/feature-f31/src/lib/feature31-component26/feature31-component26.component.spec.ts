import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component26Component } from './feature31-component26.component';

describe('Feature31Component26Component', () => {
  let component: Feature31Component26Component;
  let fixture: ComponentFixture<Feature31Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
