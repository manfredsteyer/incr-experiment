import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component16Component } from './feature71-component16.component';

describe('Feature71Component16Component', () => {
  let component: Feature71Component16Component;
  let fixture: ComponentFixture<Feature71Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
