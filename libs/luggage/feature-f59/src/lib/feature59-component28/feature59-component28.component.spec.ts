import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component28Component } from './feature59-component28.component';

describe('Feature59Component28Component', () => {
  let component: Feature59Component28Component;
  let fixture: ComponentFixture<Feature59Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
