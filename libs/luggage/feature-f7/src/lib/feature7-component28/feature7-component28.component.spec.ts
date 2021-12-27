import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component28Component } from './feature7-component28.component';

describe('Feature7Component28Component', () => {
  let component: Feature7Component28Component;
  let fixture: ComponentFixture<Feature7Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
