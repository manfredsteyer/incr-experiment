import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component19Component } from './feature35-component19.component';

describe('Feature35Component19Component', () => {
  let component: Feature35Component19Component;
  let fixture: ComponentFixture<Feature35Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
