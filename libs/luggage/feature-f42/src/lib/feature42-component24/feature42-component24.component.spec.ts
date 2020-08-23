import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component24Component } from './feature42-component24.component';

describe('Feature42Component24Component', () => {
  let component: Feature42Component24Component;
  let fixture: ComponentFixture<Feature42Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
