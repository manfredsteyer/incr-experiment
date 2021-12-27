import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component29Component } from './feature65-component29.component';

describe('Feature65Component29Component', () => {
  let component: Feature65Component29Component;
  let fixture: ComponentFixture<Feature65Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
