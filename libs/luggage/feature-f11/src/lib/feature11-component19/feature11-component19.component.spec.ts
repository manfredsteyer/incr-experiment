import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component19Component } from './feature11-component19.component';

describe('Feature11Component19Component', () => {
  let component: Feature11Component19Component;
  let fixture: ComponentFixture<Feature11Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
