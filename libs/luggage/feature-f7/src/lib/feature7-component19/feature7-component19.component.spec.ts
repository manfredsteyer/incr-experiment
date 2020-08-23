import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component19Component } from './feature7-component19.component';

describe('Feature7Component19Component', () => {
  let component: Feature7Component19Component;
  let fixture: ComponentFixture<Feature7Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
