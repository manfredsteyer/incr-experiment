import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component25Component } from './feature65-component25.component';

describe('Feature65Component25Component', () => {
  let component: Feature65Component25Component;
  let fixture: ComponentFixture<Feature65Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
