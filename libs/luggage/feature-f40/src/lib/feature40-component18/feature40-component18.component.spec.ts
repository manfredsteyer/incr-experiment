import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component18Component } from './feature40-component18.component';

describe('Feature40Component18Component', () => {
  let component: Feature40Component18Component;
  let fixture: ComponentFixture<Feature40Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
