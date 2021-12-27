import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component25Component } from './feature37-component25.component';

describe('Feature37Component25Component', () => {
  let component: Feature37Component25Component;
  let fixture: ComponentFixture<Feature37Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
