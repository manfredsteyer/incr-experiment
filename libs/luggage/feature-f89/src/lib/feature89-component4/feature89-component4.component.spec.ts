import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component4Component } from './feature89-component4.component';

describe('Feature89Component4Component', () => {
  let component: Feature89Component4Component;
  let fixture: ComponentFixture<Feature89Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
