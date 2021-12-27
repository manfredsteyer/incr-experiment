import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component25Component } from './feature81-component25.component';

describe('Feature81Component25Component', () => {
  let component: Feature81Component25Component;
  let fixture: ComponentFixture<Feature81Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
