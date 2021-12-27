import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component28Component } from './feature68-component28.component';

describe('Feature68Component28Component', () => {
  let component: Feature68Component28Component;
  let fixture: ComponentFixture<Feature68Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
