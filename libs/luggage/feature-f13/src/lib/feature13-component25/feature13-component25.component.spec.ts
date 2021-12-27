import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component25Component } from './feature13-component25.component';

describe('Feature13Component25Component', () => {
  let component: Feature13Component25Component;
  let fixture: ComponentFixture<Feature13Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
