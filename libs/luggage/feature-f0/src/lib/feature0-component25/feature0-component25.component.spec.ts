import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component25Component } from './feature0-component25.component';

describe('Feature0Component25Component', () => {
  let component: Feature0Component25Component;
  let fixture: ComponentFixture<Feature0Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
