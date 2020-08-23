import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component10Component } from './feature59-component10.component';

describe('Feature59Component10Component', () => {
  let component: Feature59Component10Component;
  let fixture: ComponentFixture<Feature59Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
