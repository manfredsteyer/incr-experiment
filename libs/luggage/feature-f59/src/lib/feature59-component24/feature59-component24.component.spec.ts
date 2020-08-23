import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component24Component } from './feature59-component24.component';

describe('Feature59Component24Component', () => {
  let component: Feature59Component24Component;
  let fixture: ComponentFixture<Feature59Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
