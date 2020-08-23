import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component23Component } from './feature7-component23.component';

describe('Feature7Component23Component', () => {
  let component: Feature7Component23Component;
  let fixture: ComponentFixture<Feature7Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
