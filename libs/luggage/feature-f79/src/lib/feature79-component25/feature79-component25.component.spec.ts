import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component25Component } from './feature79-component25.component';

describe('Feature79Component25Component', () => {
  let component: Feature79Component25Component;
  let fixture: ComponentFixture<Feature79Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
