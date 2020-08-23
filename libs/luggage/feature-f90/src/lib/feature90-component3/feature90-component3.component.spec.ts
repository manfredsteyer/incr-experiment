import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component3Component } from './feature90-component3.component';

describe('Feature90Component3Component', () => {
  let component: Feature90Component3Component;
  let fixture: ComponentFixture<Feature90Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature90Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
