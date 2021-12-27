import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component25Component } from './feature94-component25.component';

describe('Feature94Component25Component', () => {
  let component: Feature94Component25Component;
  let fixture: ComponentFixture<Feature94Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
