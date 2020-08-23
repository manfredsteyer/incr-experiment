import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component10Component } from './feature8-component10.component';

describe('Feature8Component10Component', () => {
  let component: Feature8Component10Component;
  let fixture: ComponentFixture<Feature8Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
