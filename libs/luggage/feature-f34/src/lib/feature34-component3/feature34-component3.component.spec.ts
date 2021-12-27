import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component3Component } from './feature34-component3.component';

describe('Feature34Component3Component', () => {
  let component: Feature34Component3Component;
  let fixture: ComponentFixture<Feature34Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
