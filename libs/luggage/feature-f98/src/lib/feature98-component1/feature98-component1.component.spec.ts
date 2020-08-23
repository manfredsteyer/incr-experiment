import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component1Component } from './feature98-component1.component';

describe('Feature98Component1Component', () => {
  let component: Feature98Component1Component;
  let fixture: ComponentFixture<Feature98Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
