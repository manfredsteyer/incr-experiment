import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component4Component } from './feature36-component4.component';

describe('Feature36Component4Component', () => {
  let component: Feature36Component4Component;
  let fixture: ComponentFixture<Feature36Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
