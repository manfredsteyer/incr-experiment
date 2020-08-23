import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component25Component } from './feature24-component25.component';

describe('Feature24Component25Component', () => {
  let component: Feature24Component25Component;
  let fixture: ComponentFixture<Feature24Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
