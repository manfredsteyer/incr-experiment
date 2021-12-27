import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component19Component } from './feature23-component19.component';

describe('Feature23Component19Component', () => {
  let component: Feature23Component19Component;
  let fixture: ComponentFixture<Feature23Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
