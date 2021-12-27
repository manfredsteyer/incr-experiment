import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component19Component } from './feature89-component19.component';

describe('Feature89Component19Component', () => {
  let component: Feature89Component19Component;
  let fixture: ComponentFixture<Feature89Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
