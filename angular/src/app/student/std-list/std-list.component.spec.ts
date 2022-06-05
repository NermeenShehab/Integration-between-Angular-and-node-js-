/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StdListComponent } from './std-list.component';

describe('StdListComponent', () => {
  let component: StdListComponent;
  let fixture: ComponentFixture<StdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
