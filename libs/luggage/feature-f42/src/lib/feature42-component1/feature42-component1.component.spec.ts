import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component1Component } from './feature42-component1.component';

describe('Feature42Component1Component', () => {
  let component: Feature42Component1Component;
  let fixture: ComponentFixture<Feature42Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
