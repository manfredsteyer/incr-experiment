import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component16Component } from './feature29-component16.component';

describe('Feature29Component16Component', () => {
  let component: Feature29Component16Component;
  let fixture: ComponentFixture<Feature29Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
