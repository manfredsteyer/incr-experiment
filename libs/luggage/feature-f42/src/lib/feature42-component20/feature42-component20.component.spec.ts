import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component20Component } from './feature42-component20.component';

describe('Feature42Component20Component', () => {
  let component: Feature42Component20Component;
  let fixture: ComponentFixture<Feature42Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
