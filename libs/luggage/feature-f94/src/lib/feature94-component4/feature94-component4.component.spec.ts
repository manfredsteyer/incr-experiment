import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component4Component } from './feature94-component4.component';

describe('Feature94Component4Component', () => {
  let component: Feature94Component4Component;
  let fixture: ComponentFixture<Feature94Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
