import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component4Component } from './feature64-component4.component';

describe('Feature64Component4Component', () => {
  let component: Feature64Component4Component;
  let fixture: ComponentFixture<Feature64Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
