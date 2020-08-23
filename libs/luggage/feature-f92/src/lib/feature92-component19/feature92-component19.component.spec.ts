import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component19Component } from './feature92-component19.component';

describe('Feature92Component19Component', () => {
  let component: Feature92Component19Component;
  let fixture: ComponentFixture<Feature92Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
