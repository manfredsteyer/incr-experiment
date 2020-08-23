import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component16Component } from './feature65-component16.component';

describe('Feature65Component16Component', () => {
  let component: Feature65Component16Component;
  let fixture: ComponentFixture<Feature65Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
