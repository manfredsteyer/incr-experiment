import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component19Component } from './feature32-component19.component';

describe('Feature32Component19Component', () => {
  let component: Feature32Component19Component;
  let fixture: ComponentFixture<Feature32Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
