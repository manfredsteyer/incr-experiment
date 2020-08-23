import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component15Component } from './feature91-component15.component';

describe('Feature91Component15Component', () => {
  let component: Feature91Component15Component;
  let fixture: ComponentFixture<Feature91Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
