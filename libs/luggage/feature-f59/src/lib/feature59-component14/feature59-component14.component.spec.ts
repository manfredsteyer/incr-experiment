import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component14Component } from './feature59-component14.component';

describe('Feature59Component14Component', () => {
  let component: Feature59Component14Component;
  let fixture: ComponentFixture<Feature59Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
