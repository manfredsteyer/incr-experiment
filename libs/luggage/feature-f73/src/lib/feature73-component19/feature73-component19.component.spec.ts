import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component19Component } from './feature73-component19.component';

describe('Feature73Component19Component', () => {
  let component: Feature73Component19Component;
  let fixture: ComponentFixture<Feature73Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
