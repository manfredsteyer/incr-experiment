import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component19Component } from './feature20-component19.component';

describe('Feature20Component19Component', () => {
  let component: Feature20Component19Component;
  let fixture: ComponentFixture<Feature20Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
