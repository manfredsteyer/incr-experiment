import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component19Component } from './feature93-component19.component';

describe('Feature93Component19Component', () => {
  let component: Feature93Component19Component;
  let fixture: ComponentFixture<Feature93Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
