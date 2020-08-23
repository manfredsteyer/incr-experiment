import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component23Component } from './feature54-component23.component';

describe('Feature54Component23Component', () => {
  let component: Feature54Component23Component;
  let fixture: ComponentFixture<Feature54Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
