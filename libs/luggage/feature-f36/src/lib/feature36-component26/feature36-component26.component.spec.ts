import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component26Component } from './feature36-component26.component';

describe('Feature36Component26Component', () => {
  let component: Feature36Component26Component;
  let fixture: ComponentFixture<Feature36Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
