import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component4Component } from './feature59-component4.component';

describe('Feature59Component4Component', () => {
  let component: Feature59Component4Component;
  let fixture: ComponentFixture<Feature59Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
