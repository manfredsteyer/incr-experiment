import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component10Component } from './feature23-component10.component';

describe('Feature23Component10Component', () => {
  let component: Feature23Component10Component;
  let fixture: ComponentFixture<Feature23Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
