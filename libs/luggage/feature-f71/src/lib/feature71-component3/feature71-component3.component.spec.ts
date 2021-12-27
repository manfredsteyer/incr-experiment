import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component3Component } from './feature71-component3.component';

describe('Feature71Component3Component', () => {
  let component: Feature71Component3Component;
  let fixture: ComponentFixture<Feature71Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
