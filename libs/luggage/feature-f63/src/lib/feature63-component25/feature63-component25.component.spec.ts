import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component25Component } from './feature63-component25.component';

describe('Feature63Component25Component', () => {
  let component: Feature63Component25Component;
  let fixture: ComponentFixture<Feature63Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
