import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component25Component } from './feature23-component25.component';

describe('Feature23Component25Component', () => {
  let component: Feature23Component25Component;
  let fixture: ComponentFixture<Feature23Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
