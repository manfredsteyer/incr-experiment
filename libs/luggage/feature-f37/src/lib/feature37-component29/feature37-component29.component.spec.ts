import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component29Component } from './feature37-component29.component';

describe('Feature37Component29Component', () => {
  let component: Feature37Component29Component;
  let fixture: ComponentFixture<Feature37Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
