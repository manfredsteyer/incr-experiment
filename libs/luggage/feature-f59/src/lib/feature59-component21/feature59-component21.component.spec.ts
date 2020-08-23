import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component21Component } from './feature59-component21.component';

describe('Feature59Component21Component', () => {
  let component: Feature59Component21Component;
  let fixture: ComponentFixture<Feature59Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
