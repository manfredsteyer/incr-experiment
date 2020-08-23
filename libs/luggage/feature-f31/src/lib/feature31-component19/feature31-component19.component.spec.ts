import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component19Component } from './feature31-component19.component';

describe('Feature31Component19Component', () => {
  let component: Feature31Component19Component;
  let fixture: ComponentFixture<Feature31Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
