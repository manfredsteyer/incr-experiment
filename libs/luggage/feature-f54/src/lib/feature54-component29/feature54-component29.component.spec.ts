import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component29Component } from './feature54-component29.component';

describe('Feature54Component29Component', () => {
  let component: Feature54Component29Component;
  let fixture: ComponentFixture<Feature54Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
