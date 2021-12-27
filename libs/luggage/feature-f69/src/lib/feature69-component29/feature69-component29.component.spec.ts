import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component29Component } from './feature69-component29.component';

describe('Feature69Component29Component', () => {
  let component: Feature69Component29Component;
  let fixture: ComponentFixture<Feature69Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
