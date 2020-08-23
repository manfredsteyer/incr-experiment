import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component25Component } from './feature64-component25.component';

describe('Feature64Component25Component', () => {
  let component: Feature64Component25Component;
  let fixture: ComponentFixture<Feature64Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
