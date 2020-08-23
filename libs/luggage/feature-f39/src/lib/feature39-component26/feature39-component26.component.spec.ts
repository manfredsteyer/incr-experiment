import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component26Component } from './feature39-component26.component';

describe('Feature39Component26Component', () => {
  let component: Feature39Component26Component;
  let fixture: ComponentFixture<Feature39Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
