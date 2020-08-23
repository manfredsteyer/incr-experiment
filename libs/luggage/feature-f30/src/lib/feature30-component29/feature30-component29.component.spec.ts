import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component29Component } from './feature30-component29.component';

describe('Feature30Component29Component', () => {
  let component: Feature30Component29Component;
  let fixture: ComponentFixture<Feature30Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
