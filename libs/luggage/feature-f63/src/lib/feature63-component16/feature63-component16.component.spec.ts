import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component16Component } from './feature63-component16.component';

describe('Feature63Component16Component', () => {
  let component: Feature63Component16Component;
  let fixture: ComponentFixture<Feature63Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
