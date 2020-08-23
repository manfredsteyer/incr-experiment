import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component10Component } from './feature78-component10.component';

describe('Feature78Component10Component', () => {
  let component: Feature78Component10Component;
  let fixture: ComponentFixture<Feature78Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
