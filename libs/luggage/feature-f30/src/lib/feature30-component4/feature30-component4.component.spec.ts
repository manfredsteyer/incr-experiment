import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component4Component } from './feature30-component4.component';

describe('Feature30Component4Component', () => {
  let component: Feature30Component4Component;
  let fixture: ComponentFixture<Feature30Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
