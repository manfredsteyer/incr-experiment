import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component23Component } from './feature5-component23.component';

describe('Feature5Component23Component', () => {
  let component: Feature5Component23Component;
  let fixture: ComponentFixture<Feature5Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
