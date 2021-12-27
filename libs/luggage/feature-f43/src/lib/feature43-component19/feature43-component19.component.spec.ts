import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component19Component } from './feature43-component19.component';

describe('Feature43Component19Component', () => {
  let component: Feature43Component19Component;
  let fixture: ComponentFixture<Feature43Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
