import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component26Component } from './feature91-component26.component';

describe('Feature91Component26Component', () => {
  let component: Feature91Component26Component;
  let fixture: ComponentFixture<Feature91Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
