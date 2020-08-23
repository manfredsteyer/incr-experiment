import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component25Component } from './feature74-component25.component';

describe('Feature74Component25Component', () => {
  let component: Feature74Component25Component;
  let fixture: ComponentFixture<Feature74Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
