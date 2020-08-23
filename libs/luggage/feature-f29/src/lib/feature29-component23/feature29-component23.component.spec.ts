import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component23Component } from './feature29-component23.component';

describe('Feature29Component23Component', () => {
  let component: Feature29Component23Component;
  let fixture: ComponentFixture<Feature29Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
