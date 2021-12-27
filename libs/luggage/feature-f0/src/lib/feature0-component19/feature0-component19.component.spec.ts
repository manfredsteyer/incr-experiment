import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component19Component } from './feature0-component19.component';

describe('Feature0Component19Component', () => {
  let component: Feature0Component19Component;
  let fixture: ComponentFixture<Feature0Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
