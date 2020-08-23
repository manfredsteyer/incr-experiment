import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component15Component } from './feature59-component15.component';

describe('Feature59Component15Component', () => {
  let component: Feature59Component15Component;
  let fixture: ComponentFixture<Feature59Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
