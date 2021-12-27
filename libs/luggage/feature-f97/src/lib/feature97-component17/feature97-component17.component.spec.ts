import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component17Component } from './feature97-component17.component';

describe('Feature97Component17Component', () => {
  let component: Feature97Component17Component;
  let fixture: ComponentFixture<Feature97Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
