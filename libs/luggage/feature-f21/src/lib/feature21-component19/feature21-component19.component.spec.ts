import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component19Component } from './feature21-component19.component';

describe('Feature21Component19Component', () => {
  let component: Feature21Component19Component;
  let fixture: ComponentFixture<Feature21Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
