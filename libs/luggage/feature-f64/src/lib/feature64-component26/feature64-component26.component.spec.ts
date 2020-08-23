import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component26Component } from './feature64-component26.component';

describe('Feature64Component26Component', () => {
  let component: Feature64Component26Component;
  let fixture: ComponentFixture<Feature64Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
