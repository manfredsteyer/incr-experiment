import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component3Component } from './feature79-component3.component';

describe('Feature79Component3Component', () => {
  let component: Feature79Component3Component;
  let fixture: ComponentFixture<Feature79Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
