import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component3Component } from './feature83-component3.component';

describe('Feature83Component3Component', () => {
  let component: Feature83Component3Component;
  let fixture: ComponentFixture<Feature83Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
