import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component2Component } from './feature47-component2.component';

describe('Feature47Component2Component', () => {
  let component: Feature47Component2Component;
  let fixture: ComponentFixture<Feature47Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
