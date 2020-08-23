import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component29Component } from './feature63-component29.component';

describe('Feature63Component29Component', () => {
  let component: Feature63Component29Component;
  let fixture: ComponentFixture<Feature63Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
