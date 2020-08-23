import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component0Component } from './feature42-component0.component';

describe('Feature42Component0Component', () => {
  let component: Feature42Component0Component;
  let fixture: ComponentFixture<Feature42Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
