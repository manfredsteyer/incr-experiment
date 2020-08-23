import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component16Component } from './feature79-component16.component';

describe('Feature79Component16Component', () => {
  let component: Feature79Component16Component;
  let fixture: ComponentFixture<Feature79Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
