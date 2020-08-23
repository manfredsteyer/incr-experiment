import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component23Component } from './feature82-component23.component';

describe('Feature82Component23Component', () => {
  let component: Feature82Component23Component;
  let fixture: ComponentFixture<Feature82Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
