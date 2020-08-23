import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component19Component } from './feature91-component19.component';

describe('Feature91Component19Component', () => {
  let component: Feature91Component19Component;
  let fixture: ComponentFixture<Feature91Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
