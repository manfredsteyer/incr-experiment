import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component1Component } from './feature69-component1.component';

describe('Feature69Component1Component', () => {
  let component: Feature69Component1Component;
  let fixture: ComponentFixture<Feature69Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
