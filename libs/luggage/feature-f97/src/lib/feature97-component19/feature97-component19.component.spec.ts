import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component19Component } from './feature97-component19.component';

describe('Feature97Component19Component', () => {
  let component: Feature97Component19Component;
  let fixture: ComponentFixture<Feature97Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
