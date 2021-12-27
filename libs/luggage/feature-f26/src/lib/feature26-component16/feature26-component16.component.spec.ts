import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component16Component } from './feature26-component16.component';

describe('Feature26Component16Component', () => {
  let component: Feature26Component16Component;
  let fixture: ComponentFixture<Feature26Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
