import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component3Component } from './feature59-component3.component';

describe('Feature59Component3Component', () => {
  let component: Feature59Component3Component;
  let fixture: ComponentFixture<Feature59Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
