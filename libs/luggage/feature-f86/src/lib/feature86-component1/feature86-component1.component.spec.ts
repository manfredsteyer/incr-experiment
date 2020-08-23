import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component1Component } from './feature86-component1.component';

describe('Feature86Component1Component', () => {
  let component: Feature86Component1Component;
  let fixture: ComponentFixture<Feature86Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
