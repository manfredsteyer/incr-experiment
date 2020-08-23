import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component29Component } from './feature99-component29.component';

describe('Feature99Component29Component', () => {
  let component: Feature99Component29Component;
  let fixture: ComponentFixture<Feature99Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
