import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component29Component } from './feature90-component29.component';

describe('Feature90Component29Component', () => {
  let component: Feature90Component29Component;
  let fixture: ComponentFixture<Feature90Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature90Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
