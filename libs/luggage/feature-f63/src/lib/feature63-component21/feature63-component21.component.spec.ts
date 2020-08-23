import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component21Component } from './feature63-component21.component';

describe('Feature63Component21Component', () => {
  let component: Feature63Component21Component;
  let fixture: ComponentFixture<Feature63Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
