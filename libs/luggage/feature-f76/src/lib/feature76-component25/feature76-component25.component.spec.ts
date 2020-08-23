import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component25Component } from './feature76-component25.component';

describe('Feature76Component25Component', () => {
  let component: Feature76Component25Component;
  let fixture: ComponentFixture<Feature76Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
