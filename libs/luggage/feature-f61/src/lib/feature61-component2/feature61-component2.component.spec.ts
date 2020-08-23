import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component2Component } from './feature61-component2.component';

describe('Feature61Component2Component', () => {
  let component: Feature61Component2Component;
  let fixture: ComponentFixture<Feature61Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
