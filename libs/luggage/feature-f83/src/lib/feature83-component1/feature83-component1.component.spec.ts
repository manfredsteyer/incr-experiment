import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component1Component } from './feature83-component1.component';

describe('Feature83Component1Component', () => {
  let component: Feature83Component1Component;
  let fixture: ComponentFixture<Feature83Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
