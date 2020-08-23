import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component26Component } from './feature50-component26.component';

describe('Feature50Component26Component', () => {
  let component: Feature50Component26Component;
  let fixture: ComponentFixture<Feature50Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
