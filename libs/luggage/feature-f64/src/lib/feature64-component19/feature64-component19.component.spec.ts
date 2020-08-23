import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component19Component } from './feature64-component19.component';

describe('Feature64Component19Component', () => {
  let component: Feature64Component19Component;
  let fixture: ComponentFixture<Feature64Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
