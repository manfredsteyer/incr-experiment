import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component10Component } from './feature83-component10.component';

describe('Feature83Component10Component', () => {
  let component: Feature83Component10Component;
  let fixture: ComponentFixture<Feature83Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
