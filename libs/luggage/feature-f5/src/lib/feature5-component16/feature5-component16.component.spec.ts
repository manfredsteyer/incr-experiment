import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component16Component } from './feature5-component16.component';

describe('Feature5Component16Component', () => {
  let component: Feature5Component16Component;
  let fixture: ComponentFixture<Feature5Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
