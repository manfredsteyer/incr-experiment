import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component19Component } from './feature96-component19.component';

describe('Feature96Component19Component', () => {
  let component: Feature96Component19Component;
  let fixture: ComponentFixture<Feature96Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
