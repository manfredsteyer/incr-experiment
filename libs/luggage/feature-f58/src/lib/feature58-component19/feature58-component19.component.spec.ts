import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component19Component } from './feature58-component19.component';

describe('Feature58Component19Component', () => {
  let component: Feature58Component19Component;
  let fixture: ComponentFixture<Feature58Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
