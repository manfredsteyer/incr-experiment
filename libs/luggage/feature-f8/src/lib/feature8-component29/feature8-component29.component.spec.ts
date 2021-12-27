import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component29Component } from './feature8-component29.component';

describe('Feature8Component29Component', () => {
  let component: Feature8Component29Component;
  let fixture: ComponentFixture<Feature8Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
