import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component16Component } from './feature50-component16.component';

describe('Feature50Component16Component', () => {
  let component: Feature50Component16Component;
  let fixture: ComponentFixture<Feature50Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
