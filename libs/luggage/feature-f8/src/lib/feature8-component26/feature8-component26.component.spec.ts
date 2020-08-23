import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component26Component } from './feature8-component26.component';

describe('Feature8Component26Component', () => {
  let component: Feature8Component26Component;
  let fixture: ComponentFixture<Feature8Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
