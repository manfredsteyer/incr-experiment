import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component28Component } from './feature29-component28.component';

describe('Feature29Component28Component', () => {
  let component: Feature29Component28Component;
  let fixture: ComponentFixture<Feature29Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
