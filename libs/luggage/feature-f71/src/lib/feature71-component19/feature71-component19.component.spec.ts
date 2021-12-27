import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component19Component } from './feature71-component19.component';

describe('Feature71Component19Component', () => {
  let component: Feature71Component19Component;
  let fixture: ComponentFixture<Feature71Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
