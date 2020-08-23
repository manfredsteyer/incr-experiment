import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component19Component } from './feature53-component19.component';

describe('Feature53Component19Component', () => {
  let component: Feature53Component19Component;
  let fixture: ComponentFixture<Feature53Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
