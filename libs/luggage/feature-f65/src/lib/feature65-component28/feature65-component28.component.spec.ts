import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component28Component } from './feature65-component28.component';

describe('Feature65Component28Component', () => {
  let component: Feature65Component28Component;
  let fixture: ComponentFixture<Feature65Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
