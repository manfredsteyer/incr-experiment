import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component25Component } from './feature60-component25.component';

describe('Feature60Component25Component', () => {
  let component: Feature60Component25Component;
  let fixture: ComponentFixture<Feature60Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
