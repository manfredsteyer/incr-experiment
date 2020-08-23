import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component1Component } from './feature58-component1.component';

describe('Feature58Component1Component', () => {
  let component: Feature58Component1Component;
  let fixture: ComponentFixture<Feature58Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
