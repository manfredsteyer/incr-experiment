import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component23Component } from './feature68-component23.component';

describe('Feature68Component23Component', () => {
  let component: Feature68Component23Component;
  let fixture: ComponentFixture<Feature68Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
