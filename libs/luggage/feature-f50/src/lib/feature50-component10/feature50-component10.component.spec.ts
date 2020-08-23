import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component10Component } from './feature50-component10.component';

describe('Feature50Component10Component', () => {
  let component: Feature50Component10Component;
  let fixture: ComponentFixture<Feature50Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
