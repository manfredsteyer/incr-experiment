import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component15Component } from './feature42-component15.component';

describe('Feature42Component15Component', () => {
  let component: Feature42Component15Component;
  let fixture: ComponentFixture<Feature42Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
