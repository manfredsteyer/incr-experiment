import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component19Component } from './feature15-component19.component';

describe('Feature15Component19Component', () => {
  let component: Feature15Component19Component;
  let fixture: ComponentFixture<Feature15Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
