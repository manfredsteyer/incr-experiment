import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component16Component } from './feature12-component16.component';

describe('Feature12Component16Component', () => {
  let component: Feature12Component16Component;
  let fixture: ComponentFixture<Feature12Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
