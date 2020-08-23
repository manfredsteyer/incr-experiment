import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component19Component } from './feature94-component19.component';

describe('Feature94Component19Component', () => {
  let component: Feature94Component19Component;
  let fixture: ComponentFixture<Feature94Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
