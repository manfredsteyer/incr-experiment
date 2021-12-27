import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component26Component } from './feature94-component26.component';

describe('Feature94Component26Component', () => {
  let component: Feature94Component26Component;
  let fixture: ComponentFixture<Feature94Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
