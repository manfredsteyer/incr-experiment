import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component6Component } from './feature83-component6.component';

describe('Feature83Component6Component', () => {
  let component: Feature83Component6Component;
  let fixture: ComponentFixture<Feature83Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
