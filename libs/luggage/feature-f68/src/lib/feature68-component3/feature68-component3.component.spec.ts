import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component3Component } from './feature68-component3.component';

describe('Feature68Component3Component', () => {
  let component: Feature68Component3Component;
  let fixture: ComponentFixture<Feature68Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
