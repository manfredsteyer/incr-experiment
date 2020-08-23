import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component25Component } from './feature44-component25.component';

describe('Feature44Component25Component', () => {
  let component: Feature44Component25Component;
  let fixture: ComponentFixture<Feature44Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
