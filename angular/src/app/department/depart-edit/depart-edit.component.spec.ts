import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartEditComponent } from './depart-edit.component';

describe('DepartEditComponent', () => {
  let component: DepartEditComponent;
  let fixture: ComponentFixture<DepartEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
