import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component25Component } from './feature98-component25.component';

describe('Feature98Component25Component', () => {
  let component: Feature98Component25Component;
  let fixture: ComponentFixture<Feature98Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
