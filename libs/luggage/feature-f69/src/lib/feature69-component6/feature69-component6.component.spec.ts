import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component6Component } from './feature69-component6.component';

describe('Feature69Component6Component', () => {
  let component: Feature69Component6Component;
  let fixture: ComponentFixture<Feature69Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
