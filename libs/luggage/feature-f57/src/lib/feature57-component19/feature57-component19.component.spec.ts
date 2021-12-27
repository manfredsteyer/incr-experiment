import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component19Component } from './feature57-component19.component';

describe('Feature57Component19Component', () => {
  let component: Feature57Component19Component;
  let fixture: ComponentFixture<Feature57Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
