import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component6Component } from './feature40-component6.component';

describe('Feature40Component6Component', () => {
  let component: Feature40Component6Component;
  let fixture: ComponentFixture<Feature40Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
