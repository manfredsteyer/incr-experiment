import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component25Component } from './feature43-component25.component';

describe('Feature43Component25Component', () => {
  let component: Feature43Component25Component;
  let fixture: ComponentFixture<Feature43Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
