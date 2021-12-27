import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component29Component } from './feature86-component29.component';

describe('Feature86Component29Component', () => {
  let component: Feature86Component29Component;
  let fixture: ComponentFixture<Feature86Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
