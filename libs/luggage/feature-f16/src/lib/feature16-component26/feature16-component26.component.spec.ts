import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component26Component } from './feature16-component26.component';

describe('Feature16Component26Component', () => {
  let component: Feature16Component26Component;
  let fixture: ComponentFixture<Feature16Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
