import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component23Component } from './feature19-component23.component';

describe('Feature19Component23Component', () => {
  let component: Feature19Component23Component;
  let fixture: ComponentFixture<Feature19Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
