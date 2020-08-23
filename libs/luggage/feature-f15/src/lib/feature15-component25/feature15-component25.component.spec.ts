import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component25Component } from './feature15-component25.component';

describe('Feature15Component25Component', () => {
  let component: Feature15Component25Component;
  let fixture: ComponentFixture<Feature15Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
