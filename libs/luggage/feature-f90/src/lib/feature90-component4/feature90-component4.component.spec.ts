import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component4Component } from './feature90-component4.component';

describe('Feature90Component4Component', () => {
  let component: Feature90Component4Component;
  let fixture: ComponentFixture<Feature90Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
