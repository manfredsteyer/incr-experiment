import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component16Component } from './feature34-component16.component';

describe('Feature34Component16Component', () => {
  let component: Feature34Component16Component;
  let fixture: ComponentFixture<Feature34Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
