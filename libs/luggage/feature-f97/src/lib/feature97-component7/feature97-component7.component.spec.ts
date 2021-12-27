import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component7Component } from './feature97-component7.component';

describe('Feature97Component7Component', () => {
  let component: Feature97Component7Component;
  let fixture: ComponentFixture<Feature97Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
