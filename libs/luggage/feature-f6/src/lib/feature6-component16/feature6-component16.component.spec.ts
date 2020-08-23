import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component16Component } from './feature6-component16.component';

describe('Feature6Component16Component', () => {
  let component: Feature6Component16Component;
  let fixture: ComponentFixture<Feature6Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
