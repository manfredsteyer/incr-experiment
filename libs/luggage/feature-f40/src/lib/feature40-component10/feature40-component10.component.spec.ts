import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component10Component } from './feature40-component10.component';

describe('Feature40Component10Component', () => {
  let component: Feature40Component10Component;
  let fixture: ComponentFixture<Feature40Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
