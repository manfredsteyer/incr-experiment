import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component4Component } from './feature65-component4.component';

describe('Feature65Component4Component', () => {
  let component: Feature65Component4Component;
  let fixture: ComponentFixture<Feature65Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
