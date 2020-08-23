import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component1Component } from './feature68-component1.component';

describe('Feature68Component1Component', () => {
  let component: Feature68Component1Component;
  let fixture: ComponentFixture<Feature68Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
