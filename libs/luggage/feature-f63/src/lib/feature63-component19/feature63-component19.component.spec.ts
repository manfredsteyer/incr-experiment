import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component19Component } from './feature63-component19.component';

describe('Feature63Component19Component', () => {
  let component: Feature63Component19Component;
  let fixture: ComponentFixture<Feature63Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
