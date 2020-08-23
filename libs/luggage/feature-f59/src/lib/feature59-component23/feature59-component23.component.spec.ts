import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component23Component } from './feature59-component23.component';

describe('Feature59Component23Component', () => {
  let component: Feature59Component23Component;
  let fixture: ComponentFixture<Feature59Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
