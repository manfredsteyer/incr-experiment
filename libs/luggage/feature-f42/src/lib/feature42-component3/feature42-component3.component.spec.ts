import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component3Component } from './feature42-component3.component';

describe('Feature42Component3Component', () => {
  let component: Feature42Component3Component;
  let fixture: ComponentFixture<Feature42Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});