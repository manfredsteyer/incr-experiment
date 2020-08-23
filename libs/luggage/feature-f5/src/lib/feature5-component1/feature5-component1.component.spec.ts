import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component1Component } from './feature5-component1.component';

describe('Feature5Component1Component', () => {
  let component: Feature5Component1Component;
  let fixture: ComponentFixture<Feature5Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
