import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component24Component } from './feature97-component24.component';

describe('Feature97Component24Component', () => {
  let component: Feature97Component24Component;
  let fixture: ComponentFixture<Feature97Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
