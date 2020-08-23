import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component26Component } from './feature74-component26.component';

describe('Feature74Component26Component', () => {
  let component: Feature74Component26Component;
  let fixture: ComponentFixture<Feature74Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
