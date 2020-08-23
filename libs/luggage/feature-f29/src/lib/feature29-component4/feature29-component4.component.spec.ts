import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component4Component } from './feature29-component4.component';

describe('Feature29Component4Component', () => {
  let component: Feature29Component4Component;
  let fixture: ComponentFixture<Feature29Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
