import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component4Component } from './feature73-component4.component';

describe('Feature73Component4Component', () => {
  let component: Feature73Component4Component;
  let fixture: ComponentFixture<Feature73Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
