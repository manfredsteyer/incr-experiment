import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component5Component } from './feature19-component5.component';

describe('Feature19Component5Component', () => {
  let component: Feature19Component5Component;
  let fixture: ComponentFixture<Feature19Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
