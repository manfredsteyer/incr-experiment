import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component26Component } from './feature96-component26.component';

describe('Feature96Component26Component', () => {
  let component: Feature96Component26Component;
  let fixture: ComponentFixture<Feature96Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
