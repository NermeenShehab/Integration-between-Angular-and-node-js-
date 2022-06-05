/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StdAddComponent } from './std-add.component';

describe('StdAddComponent', () => {
  let component: StdAddComponent;
  let fixture: ComponentFixture<StdAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
