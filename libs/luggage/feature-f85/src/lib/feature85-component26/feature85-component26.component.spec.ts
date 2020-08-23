import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component26Component } from './feature85-component26.component';

describe('Feature85Component26Component', () => {
  let component: Feature85Component26Component;
  let fixture: ComponentFixture<Feature85Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
