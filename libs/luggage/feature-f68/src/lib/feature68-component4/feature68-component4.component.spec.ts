import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component4Component } from './feature68-component4.component';

describe('Feature68Component4Component', () => {
  let component: Feature68Component4Component;
  let fixture: ComponentFixture<Feature68Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
