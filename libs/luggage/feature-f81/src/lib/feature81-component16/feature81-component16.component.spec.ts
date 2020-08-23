import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component16Component } from './feature81-component16.component';

describe('Feature81Component16Component', () => {
  let component: Feature81Component16Component;
  let fixture: ComponentFixture<Feature81Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
