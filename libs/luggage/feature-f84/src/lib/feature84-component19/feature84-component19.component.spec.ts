import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component19Component } from './feature84-component19.component';

describe('Feature84Component19Component', () => {
  let component: Feature84Component19Component;
  let fixture: ComponentFixture<Feature84Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
