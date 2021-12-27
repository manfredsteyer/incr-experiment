import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component19Component } from './feature10-component19.component';

describe('Feature10Component19Component', () => {
  let component: Feature10Component19Component;
  let fixture: ComponentFixture<Feature10Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
