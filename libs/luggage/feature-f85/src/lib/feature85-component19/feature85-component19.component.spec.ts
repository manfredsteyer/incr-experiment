import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component19Component } from './feature85-component19.component';

describe('Feature85Component19Component', () => {
  let component: Feature85Component19Component;
  let fixture: ComponentFixture<Feature85Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
