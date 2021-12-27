import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component15Component } from './feature87-component15.component';

describe('Feature87Component15Component', () => {
  let component: Feature87Component15Component;
  let fixture: ComponentFixture<Feature87Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
