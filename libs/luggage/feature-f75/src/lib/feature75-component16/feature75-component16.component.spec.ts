import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component16Component } from './feature75-component16.component';

describe('Feature75Component16Component', () => {
  let component: Feature75Component16Component;
  let fixture: ComponentFixture<Feature75Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
