import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component19Component } from './feature30-component19.component';

describe('Feature30Component19Component', () => {
  let component: Feature30Component19Component;
  let fixture: ComponentFixture<Feature30Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
