import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component1Component } from './feature49-component1.component';

describe('Feature49Component1Component', () => {
  let component: Feature49Component1Component;
  let fixture: ComponentFixture<Feature49Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
