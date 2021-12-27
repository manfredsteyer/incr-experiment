import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component3Component } from './feature6-component3.component';

describe('Feature6Component3Component', () => {
  let component: Feature6Component3Component;
  let fixture: ComponentFixture<Feature6Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
