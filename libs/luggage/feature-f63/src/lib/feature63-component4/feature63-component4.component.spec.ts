import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component4Component } from './feature63-component4.component';

describe('Feature63Component4Component', () => {
  let component: Feature63Component4Component;
  let fixture: ComponentFixture<Feature63Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
