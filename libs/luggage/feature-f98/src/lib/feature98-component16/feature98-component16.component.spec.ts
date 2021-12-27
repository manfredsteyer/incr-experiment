import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component16Component } from './feature98-component16.component';

describe('Feature98Component16Component', () => {
  let component: Feature98Component16Component;
  let fixture: ComponentFixture<Feature98Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
