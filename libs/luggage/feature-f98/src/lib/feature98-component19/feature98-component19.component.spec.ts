import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component19Component } from './feature98-component19.component';

describe('Feature98Component19Component', () => {
  let component: Feature98Component19Component;
  let fixture: ComponentFixture<Feature98Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
