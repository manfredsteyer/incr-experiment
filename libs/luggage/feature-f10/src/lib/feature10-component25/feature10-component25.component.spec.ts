import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component25Component } from './feature10-component25.component';

describe('Feature10Component25Component', () => {
  let component: Feature10Component25Component;
  let fixture: ComponentFixture<Feature10Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
