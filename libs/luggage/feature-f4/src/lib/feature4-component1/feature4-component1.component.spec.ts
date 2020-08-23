import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component1Component } from './feature4-component1.component';

describe('Feature4Component1Component', () => {
  let component: Feature4Component1Component;
  let fixture: ComponentFixture<Feature4Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
