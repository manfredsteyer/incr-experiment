import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component4Component } from './feature37-component4.component';

describe('Feature37Component4Component', () => {
  let component: Feature37Component4Component;
  let fixture: ComponentFixture<Feature37Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
