import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component6Component } from './feature68-component6.component';

describe('Feature68Component6Component', () => {
  let component: Feature68Component6Component;
  let fixture: ComponentFixture<Feature68Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
