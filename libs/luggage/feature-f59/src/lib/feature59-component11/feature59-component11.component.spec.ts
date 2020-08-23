import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component11Component } from './feature59-component11.component';

describe('Feature59Component11Component', () => {
  let component: Feature59Component11Component;
  let fixture: ComponentFixture<Feature59Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
