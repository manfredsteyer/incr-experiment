import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component16Component } from './feature59-component16.component';

describe('Feature59Component16Component', () => {
  let component: Feature59Component16Component;
  let fixture: ComponentFixture<Feature59Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
