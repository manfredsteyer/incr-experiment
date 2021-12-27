import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component16Component } from './feature87-component16.component';

describe('Feature87Component16Component', () => {
  let component: Feature87Component16Component;
  let fixture: ComponentFixture<Feature87Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
