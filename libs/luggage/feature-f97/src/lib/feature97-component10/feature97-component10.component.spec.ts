import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component10Component } from './feature97-component10.component';

describe('Feature97Component10Component', () => {
  let component: Feature97Component10Component;
  let fixture: ComponentFixture<Feature97Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
