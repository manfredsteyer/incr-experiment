import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component25Component } from './feature73-component25.component';

describe('Feature73Component25Component', () => {
  let component: Feature73Component25Component;
  let fixture: ComponentFixture<Feature73Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
