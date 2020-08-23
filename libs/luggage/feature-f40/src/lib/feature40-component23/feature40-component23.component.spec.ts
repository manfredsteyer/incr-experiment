import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component23Component } from './feature40-component23.component';

describe('Feature40Component23Component', () => {
  let component: Feature40Component23Component;
  let fixture: ComponentFixture<Feature40Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
