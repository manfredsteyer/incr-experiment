import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component25Component } from './feature96-component25.component';

describe('Feature96Component25Component', () => {
  let component: Feature96Component25Component;
  let fixture: ComponentFixture<Feature96Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
