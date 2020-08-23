import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component28Component } from './feature63-component28.component';

describe('Feature63Component28Component', () => {
  let component: Feature63Component28Component;
  let fixture: ComponentFixture<Feature63Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
