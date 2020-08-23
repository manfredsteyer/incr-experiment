import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component19Component } from './feature24-component19.component';

describe('Feature24Component19Component', () => {
  let component: Feature24Component19Component;
  let fixture: ComponentFixture<Feature24Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
