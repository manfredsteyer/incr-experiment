import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component19Component } from './feature36-component19.component';

describe('Feature36Component19Component', () => {
  let component: Feature36Component19Component;
  let fixture: ComponentFixture<Feature36Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
