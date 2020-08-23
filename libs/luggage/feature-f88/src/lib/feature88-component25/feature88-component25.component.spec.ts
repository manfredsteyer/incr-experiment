import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component25Component } from './feature88-component25.component';

describe('Feature88Component25Component', () => {
  let component: Feature88Component25Component;
  let fixture: ComponentFixture<Feature88Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
