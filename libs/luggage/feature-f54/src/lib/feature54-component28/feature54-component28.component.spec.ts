import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component28Component } from './feature54-component28.component';

describe('Feature54Component28Component', () => {
  let component: Feature54Component28Component;
  let fixture: ComponentFixture<Feature54Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
