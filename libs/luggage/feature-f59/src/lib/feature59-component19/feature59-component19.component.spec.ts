import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component19Component } from './feature59-component19.component';

describe('Feature59Component19Component', () => {
  let component: Feature59Component19Component;
  let fixture: ComponentFixture<Feature59Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
