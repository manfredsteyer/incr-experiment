import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component26Component } from './feature40-component26.component';

describe('Feature40Component26Component', () => {
  let component: Feature40Component26Component;
  let fixture: ComponentFixture<Feature40Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
