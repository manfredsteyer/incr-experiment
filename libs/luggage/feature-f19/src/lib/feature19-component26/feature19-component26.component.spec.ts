import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component26Component } from './feature19-component26.component';

describe('Feature19Component26Component', () => {
  let component: Feature19Component26Component;
  let fixture: ComponentFixture<Feature19Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
