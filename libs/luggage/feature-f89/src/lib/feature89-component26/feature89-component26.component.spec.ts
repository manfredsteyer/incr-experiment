import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component26Component } from './feature89-component26.component';

describe('Feature89Component26Component', () => {
  let component: Feature89Component26Component;
  let fixture: ComponentFixture<Feature89Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
