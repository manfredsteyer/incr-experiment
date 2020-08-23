import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component8Component } from './feature59-component8.component';

describe('Feature59Component8Component', () => {
  let component: Feature59Component8Component;
  let fixture: ComponentFixture<Feature59Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
