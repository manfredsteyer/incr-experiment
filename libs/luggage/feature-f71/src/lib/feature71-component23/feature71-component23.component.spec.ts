import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component23Component } from './feature71-component23.component';

describe('Feature71Component23Component', () => {
  let component: Feature71Component23Component;
  let fixture: ComponentFixture<Feature71Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
