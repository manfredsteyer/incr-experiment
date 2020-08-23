import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component26Component } from './feature71-component26.component';

describe('Feature71Component26Component', () => {
  let component: Feature71Component26Component;
  let fixture: ComponentFixture<Feature71Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
