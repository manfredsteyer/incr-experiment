import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component16Component } from './feature28-component16.component';

describe('Feature28Component16Component', () => {
  let component: Feature28Component16Component;
  let fixture: ComponentFixture<Feature28Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
