import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component16Component } from './feature23-component16.component';

describe('Feature23Component16Component', () => {
  let component: Feature23Component16Component;
  let fixture: ComponentFixture<Feature23Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
