import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component18Component } from './feature97-component18.component';

describe('Feature97Component18Component', () => {
  let component: Feature97Component18Component;
  let fixture: ComponentFixture<Feature97Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
