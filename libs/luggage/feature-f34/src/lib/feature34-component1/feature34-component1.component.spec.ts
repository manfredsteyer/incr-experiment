import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component1Component } from './feature34-component1.component';

describe('Feature34Component1Component', () => {
  let component: Feature34Component1Component;
  let fixture: ComponentFixture<Feature34Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
