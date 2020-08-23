import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component25Component } from './feature90-component25.component';

describe('Feature90Component25Component', () => {
  let component: Feature90Component25Component;
  let fixture: ComponentFixture<Feature90Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature90Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
