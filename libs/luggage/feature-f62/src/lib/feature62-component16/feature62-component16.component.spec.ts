import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component16Component } from './feature62-component16.component';

describe('Feature62Component16Component', () => {
  let component: Feature62Component16Component;
  let fixture: ComponentFixture<Feature62Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
