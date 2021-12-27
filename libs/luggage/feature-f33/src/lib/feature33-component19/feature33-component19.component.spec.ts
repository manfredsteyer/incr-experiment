import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component19Component } from './feature33-component19.component';

describe('Feature33Component19Component', () => {
  let component: Feature33Component19Component;
  let fixture: ComponentFixture<Feature33Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
