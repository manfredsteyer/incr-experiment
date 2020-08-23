import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component19Component } from './feature25-component19.component';

describe('Feature25Component19Component', () => {
  let component: Feature25Component19Component;
  let fixture: ComponentFixture<Feature25Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
