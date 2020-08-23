import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component1Component } from './feature92-component1.component';

describe('Feature92Component1Component', () => {
  let component: Feature92Component1Component;
  let fixture: ComponentFixture<Feature92Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
