import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component26Component } from './feature63-component26.component';

describe('Feature63Component26Component', () => {
  let component: Feature63Component26Component;
  let fixture: ComponentFixture<Feature63Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
