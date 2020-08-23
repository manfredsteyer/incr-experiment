import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component26Component } from './feature59-component26.component';

describe('Feature59Component26Component', () => {
  let component: Feature59Component26Component;
  let fixture: ComponentFixture<Feature59Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
