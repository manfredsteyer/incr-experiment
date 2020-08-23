import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component25Component } from './feature72-component25.component';

describe('Feature72Component25Component', () => {
  let component: Feature72Component25Component;
  let fixture: ComponentFixture<Feature72Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
