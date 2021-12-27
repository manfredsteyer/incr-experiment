import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component16Component } from './feature69-component16.component';

describe('Feature69Component16Component', () => {
  let component: Feature69Component16Component;
  let fixture: ComponentFixture<Feature69Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
