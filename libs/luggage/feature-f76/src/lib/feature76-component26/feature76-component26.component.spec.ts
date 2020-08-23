import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component26Component } from './feature76-component26.component';

describe('Feature76Component26Component', () => {
  let component: Feature76Component26Component;
  let fixture: ComponentFixture<Feature76Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
