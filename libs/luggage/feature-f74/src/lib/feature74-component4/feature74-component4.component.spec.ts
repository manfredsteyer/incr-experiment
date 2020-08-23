import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component4Component } from './feature74-component4.component';

describe('Feature74Component4Component', () => {
  let component: Feature74Component4Component;
  let fixture: ComponentFixture<Feature74Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
