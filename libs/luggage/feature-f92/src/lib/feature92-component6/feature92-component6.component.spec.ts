import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component6Component } from './feature92-component6.component';

describe('Feature92Component6Component', () => {
  let component: Feature92Component6Component;
  let fixture: ComponentFixture<Feature92Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
