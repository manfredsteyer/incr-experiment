import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component3Component } from './feature93-component3.component';

describe('Feature93Component3Component', () => {
  let component: Feature93Component3Component;
  let fixture: ComponentFixture<Feature93Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
