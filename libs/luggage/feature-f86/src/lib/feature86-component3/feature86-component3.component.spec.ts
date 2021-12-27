import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component3Component } from './feature86-component3.component';

describe('Feature86Component3Component', () => {
  let component: Feature86Component3Component;
  let fixture: ComponentFixture<Feature86Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
