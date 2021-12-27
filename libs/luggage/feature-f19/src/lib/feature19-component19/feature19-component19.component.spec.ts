import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component19Component } from './feature19-component19.component';

describe('Feature19Component19Component', () => {
  let component: Feature19Component19Component;
  let fixture: ComponentFixture<Feature19Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
