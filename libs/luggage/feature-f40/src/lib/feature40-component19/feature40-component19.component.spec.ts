import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component19Component } from './feature40-component19.component';

describe('Feature40Component19Component', () => {
  let component: Feature40Component19Component;
  let fixture: ComponentFixture<Feature40Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
