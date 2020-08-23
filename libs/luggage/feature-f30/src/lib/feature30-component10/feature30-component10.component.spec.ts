import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component10Component } from './feature30-component10.component';

describe('Feature30Component10Component', () => {
  let component: Feature30Component10Component;
  let fixture: ComponentFixture<Feature30Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
