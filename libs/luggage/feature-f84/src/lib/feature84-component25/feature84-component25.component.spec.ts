import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component25Component } from './feature84-component25.component';

describe('Feature84Component25Component', () => {
  let component: Feature84Component25Component;
  let fixture: ComponentFixture<Feature84Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
