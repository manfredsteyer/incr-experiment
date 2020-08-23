import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component19Component } from './feature51-component19.component';

describe('Feature51Component19Component', () => {
  let component: Feature51Component19Component;
  let fixture: ComponentFixture<Feature51Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
