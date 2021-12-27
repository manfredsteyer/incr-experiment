import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component16Component } from './feature86-component16.component';

describe('Feature86Component16Component', () => {
  let component: Feature86Component16Component;
  let fixture: ComponentFixture<Feature86Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
