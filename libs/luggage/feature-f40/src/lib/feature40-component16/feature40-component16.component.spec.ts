import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component16Component } from './feature40-component16.component';

describe('Feature40Component16Component', () => {
  let component: Feature40Component16Component;
  let fixture: ComponentFixture<Feature40Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
