import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component25Component } from './feature4-component25.component';

describe('Feature4Component25Component', () => {
  let component: Feature4Component25Component;
  let fixture: ComponentFixture<Feature4Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
