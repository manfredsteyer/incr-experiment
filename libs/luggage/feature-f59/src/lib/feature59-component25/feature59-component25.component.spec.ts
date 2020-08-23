import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component25Component } from './feature59-component25.component';

describe('Feature59Component25Component', () => {
  let component: Feature59Component25Component;
  let fixture: ComponentFixture<Feature59Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
