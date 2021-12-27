import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component25Component } from './feature89-component25.component';

describe('Feature89Component25Component', () => {
  let component: Feature89Component25Component;
  let fixture: ComponentFixture<Feature89Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
