import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component19Component } from './feature49-component19.component';

describe('Feature49Component19Component', () => {
  let component: Feature49Component19Component;
  let fixture: ComponentFixture<Feature49Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
