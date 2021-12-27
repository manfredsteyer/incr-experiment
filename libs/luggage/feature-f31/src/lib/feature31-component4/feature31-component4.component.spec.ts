import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component4Component } from './feature31-component4.component';

describe('Feature31Component4Component', () => {
  let component: Feature31Component4Component;
  let fixture: ComponentFixture<Feature31Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
