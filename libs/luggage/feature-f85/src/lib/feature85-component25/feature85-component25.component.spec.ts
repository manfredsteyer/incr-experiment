import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component25Component } from './feature85-component25.component';

describe('Feature85Component25Component', () => {
  let component: Feature85Component25Component;
  let fixture: ComponentFixture<Feature85Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});