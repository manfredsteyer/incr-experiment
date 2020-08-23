import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component16Component } from './feature49-component16.component';

describe('Feature49Component16Component', () => {
  let component: Feature49Component16Component;
  let fixture: ComponentFixture<Feature49Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
