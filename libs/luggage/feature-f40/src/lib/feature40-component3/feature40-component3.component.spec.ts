import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component3Component } from './feature40-component3.component';

describe('Feature40Component3Component', () => {
  let component: Feature40Component3Component;
  let fixture: ComponentFixture<Feature40Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
