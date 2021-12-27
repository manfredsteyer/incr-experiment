import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component3Component } from './feature75-component3.component';

describe('Feature75Component3Component', () => {
  let component: Feature75Component3Component;
  let fixture: ComponentFixture<Feature75Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
