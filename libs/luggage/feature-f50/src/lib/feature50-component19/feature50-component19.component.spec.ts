import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component19Component } from './feature50-component19.component';

describe('Feature50Component19Component', () => {
  let component: Feature50Component19Component;
  let fixture: ComponentFixture<Feature50Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
