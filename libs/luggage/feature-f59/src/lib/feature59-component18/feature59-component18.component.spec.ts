import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component18Component } from './feature59-component18.component';

describe('Feature59Component18Component', () => {
  let component: Feature59Component18Component;
  let fixture: ComponentFixture<Feature59Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
