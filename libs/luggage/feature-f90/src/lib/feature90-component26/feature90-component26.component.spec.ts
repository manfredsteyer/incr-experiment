import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component26Component } from './feature90-component26.component';

describe('Feature90Component26Component', () => {
  let component: Feature90Component26Component;
  let fixture: ComponentFixture<Feature90Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
