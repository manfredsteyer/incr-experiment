import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component7Component } from './feature42-component7.component';

describe('Feature42Component7Component', () => {
  let component: Feature42Component7Component;
  let fixture: ComponentFixture<Feature42Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
