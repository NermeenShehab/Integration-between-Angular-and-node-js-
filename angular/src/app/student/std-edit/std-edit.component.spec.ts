/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StdEditComponent } from './std-edit.component';

describe('StdEditComponent', () => {
  let component: StdEditComponent;
  let fixture: ComponentFixture<StdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
