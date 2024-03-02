import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDowarComponent } from './add-dowar.component';

describe('AddDowarComponent', () => {
  let component: AddDowarComponent;
  let fixture: ComponentFixture<AddDowarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDowarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDowarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
