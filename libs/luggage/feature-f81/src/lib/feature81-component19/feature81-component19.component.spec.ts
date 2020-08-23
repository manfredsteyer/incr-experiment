import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component19Component } from './feature81-component19.component';

describe('Feature81Component19Component', () => {
  let component: Feature81Component19Component;
  let fixture: ComponentFixture<Feature81Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
