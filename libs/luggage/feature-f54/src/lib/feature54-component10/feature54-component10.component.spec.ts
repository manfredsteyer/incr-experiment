import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component10Component } from './feature54-component10.component';

describe('Feature54Component10Component', () => {
  let component: Feature54Component10Component;
  let fixture: ComponentFixture<Feature54Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
