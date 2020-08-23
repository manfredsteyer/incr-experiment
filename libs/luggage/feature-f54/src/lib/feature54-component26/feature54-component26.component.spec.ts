import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component26Component } from './feature54-component26.component';

describe('Feature54Component26Component', () => {
  let component: Feature54Component26Component;
  let fixture: ComponentFixture<Feature54Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
