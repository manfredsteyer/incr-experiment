import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component16Component } from './feature83-component16.component';

describe('Feature83Component16Component', () => {
  let component: Feature83Component16Component;
  let fixture: ComponentFixture<Feature83Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
