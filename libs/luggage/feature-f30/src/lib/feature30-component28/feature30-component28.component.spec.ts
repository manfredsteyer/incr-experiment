import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component28Component } from './feature30-component28.component';

describe('Feature30Component28Component', () => {
  let component: Feature30Component28Component;
  let fixture: ComponentFixture<Feature30Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
