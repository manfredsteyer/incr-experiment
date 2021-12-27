import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component29Component } from './feature7-component29.component';

describe('Feature7Component29Component', () => {
  let component: Feature7Component29Component;
  let fixture: ComponentFixture<Feature7Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
