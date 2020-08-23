import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component19Component } from './feature26-component19.component';

describe('Feature26Component19Component', () => {
  let component: Feature26Component19Component;
  let fixture: ComponentFixture<Feature26Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
