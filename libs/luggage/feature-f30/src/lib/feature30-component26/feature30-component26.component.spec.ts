import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component26Component } from './feature30-component26.component';

describe('Feature30Component26Component', () => {
  let component: Feature30Component26Component;
  let fixture: ComponentFixture<Feature30Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
