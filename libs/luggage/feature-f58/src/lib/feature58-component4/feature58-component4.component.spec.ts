import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component4Component } from './feature58-component4.component';

describe('Feature58Component4Component', () => {
  let component: Feature58Component4Component;
  let fixture: ComponentFixture<Feature58Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
