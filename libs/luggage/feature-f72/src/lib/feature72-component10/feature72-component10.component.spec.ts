import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component10Component } from './feature72-component10.component';

describe('Feature72Component10Component', () => {
  let component: Feature72Component10Component;
  let fixture: ComponentFixture<Feature72Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
