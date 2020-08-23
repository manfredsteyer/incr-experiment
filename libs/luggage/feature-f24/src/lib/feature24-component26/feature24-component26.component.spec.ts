import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component26Component } from './feature24-component26.component';

describe('Feature24Component26Component', () => {
  let component: Feature24Component26Component;
  let fixture: ComponentFixture<Feature24Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
