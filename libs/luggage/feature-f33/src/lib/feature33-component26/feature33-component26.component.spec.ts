import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component26Component } from './feature33-component26.component';

describe('Feature33Component26Component', () => {
  let component: Feature33Component26Component;
  let fixture: ComponentFixture<Feature33Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
