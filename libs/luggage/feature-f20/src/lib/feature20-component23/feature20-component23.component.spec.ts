import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component23Component } from './feature20-component23.component';

describe('Feature20Component23Component', () => {
  let component: Feature20Component23Component;
  let fixture: ComponentFixture<Feature20Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
