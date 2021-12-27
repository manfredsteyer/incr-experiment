import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component6Component } from './feature48-component6.component';

describe('Feature48Component6Component', () => {
  let component: Feature48Component6Component;
  let fixture: ComponentFixture<Feature48Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
