import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component16Component } from './feature99-component16.component';

describe('Feature99Component16Component', () => {
  let component: Feature99Component16Component;
  let fixture: ComponentFixture<Feature99Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
