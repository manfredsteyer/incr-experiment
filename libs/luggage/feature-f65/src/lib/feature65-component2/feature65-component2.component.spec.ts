import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component2Component } from './feature65-component2.component';

describe('Feature65Component2Component', () => {
  let component: Feature65Component2Component;
  let fixture: ComponentFixture<Feature65Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
