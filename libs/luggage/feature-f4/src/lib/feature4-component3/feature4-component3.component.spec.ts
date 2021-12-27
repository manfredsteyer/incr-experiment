import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component3Component } from './feature4-component3.component';

describe('Feature4Component3Component', () => {
  let component: Feature4Component3Component;
  let fixture: ComponentFixture<Feature4Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
