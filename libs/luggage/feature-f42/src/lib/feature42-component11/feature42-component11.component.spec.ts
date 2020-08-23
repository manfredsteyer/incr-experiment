import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component11Component } from './feature42-component11.component';

describe('Feature42Component11Component', () => {
  let component: Feature42Component11Component;
  let fixture: ComponentFixture<Feature42Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
