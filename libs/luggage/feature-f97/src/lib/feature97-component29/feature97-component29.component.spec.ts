import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component29Component } from './feature97-component29.component';

describe('Feature97Component29Component', () => {
  let component: Feature97Component29Component;
  let fixture: ComponentFixture<Feature97Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
