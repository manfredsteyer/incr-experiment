import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component18Component } from './feature42-component18.component';

describe('Feature42Component18Component', () => {
  let component: Feature42Component18Component;
  let fixture: ComponentFixture<Feature42Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
