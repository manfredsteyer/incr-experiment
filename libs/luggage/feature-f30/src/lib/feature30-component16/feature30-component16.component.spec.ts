import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component16Component } from './feature30-component16.component';

describe('Feature30Component16Component', () => {
  let component: Feature30Component16Component;
  let fixture: ComponentFixture<Feature30Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
