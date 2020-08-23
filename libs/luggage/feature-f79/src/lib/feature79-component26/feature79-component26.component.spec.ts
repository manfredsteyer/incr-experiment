import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component26Component } from './feature79-component26.component';

describe('Feature79Component26Component', () => {
  let component: Feature79Component26Component;
  let fixture: ComponentFixture<Feature79Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
