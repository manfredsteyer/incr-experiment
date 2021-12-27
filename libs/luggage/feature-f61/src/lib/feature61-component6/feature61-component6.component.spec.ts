import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component6Component } from './feature61-component6.component';

describe('Feature61Component6Component', () => {
  let component: Feature61Component6Component;
  let fixture: ComponentFixture<Feature61Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
