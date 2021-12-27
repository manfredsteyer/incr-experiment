import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component29Component } from './feature48-component29.component';

describe('Feature48Component29Component', () => {
  let component: Feature48Component29Component;
  let fixture: ComponentFixture<Feature48Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
