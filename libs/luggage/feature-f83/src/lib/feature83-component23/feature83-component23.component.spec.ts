import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component23Component } from './feature83-component23.component';

describe('Feature83Component23Component', () => {
  let component: Feature83Component23Component;
  let fixture: ComponentFixture<Feature83Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
