import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component25Component } from './feature51-component25.component';

describe('Feature51Component25Component', () => {
  let component: Feature51Component25Component;
  let fixture: ComponentFixture<Feature51Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
