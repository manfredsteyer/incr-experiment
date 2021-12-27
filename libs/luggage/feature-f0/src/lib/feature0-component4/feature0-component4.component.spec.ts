import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component4Component } from './feature0-component4.component';

describe('Feature0Component4Component', () => {
  let component: Feature0Component4Component;
  let fixture: ComponentFixture<Feature0Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
