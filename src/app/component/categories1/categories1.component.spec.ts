import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categories1Component } from './categories1.component';

describe('Categories1Component', () => {
  let component: Categories1Component;
  let fixture: ComponentFixture<Categories1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categories1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categories1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
