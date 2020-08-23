import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component19Component } from './feature8-component19.component';

describe('Feature8Component19Component', () => {
  let component: Feature8Component19Component;
  let fixture: ComponentFixture<Feature8Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
