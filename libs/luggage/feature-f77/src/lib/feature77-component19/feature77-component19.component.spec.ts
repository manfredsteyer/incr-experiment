import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component19Component } from './feature77-component19.component';

describe('Feature77Component19Component', () => {
  let component: Feature77Component19Component;
  let fixture: ComponentFixture<Feature77Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
