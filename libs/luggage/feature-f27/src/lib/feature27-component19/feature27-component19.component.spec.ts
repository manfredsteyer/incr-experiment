import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component19Component } from './feature27-component19.component';

describe('Feature27Component19Component', () => {
  let component: Feature27Component19Component;
  let fixture: ComponentFixture<Feature27Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
