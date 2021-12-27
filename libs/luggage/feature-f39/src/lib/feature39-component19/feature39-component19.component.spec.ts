import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component19Component } from './feature39-component19.component';

describe('Feature39Component19Component', () => {
  let component: Feature39Component19Component;
  let fixture: ComponentFixture<Feature39Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
