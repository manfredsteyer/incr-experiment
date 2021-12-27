import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component3Component } from './feature48-component3.component';

describe('Feature48Component3Component', () => {
  let component: Feature48Component3Component;
  let fixture: ComponentFixture<Feature48Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
