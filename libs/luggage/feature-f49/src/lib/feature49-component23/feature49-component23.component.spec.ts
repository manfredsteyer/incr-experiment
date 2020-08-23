import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component23Component } from './feature49-component23.component';

describe('Feature49Component23Component', () => {
  let component: Feature49Component23Component;
  let fixture: ComponentFixture<Feature49Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
