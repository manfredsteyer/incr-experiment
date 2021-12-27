import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component16Component } from './feature68-component16.component';

describe('Feature68Component16Component', () => {
  let component: Feature68Component16Component;
  let fixture: ComponentFixture<Feature68Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
