import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBienComponent } from './add-bien.component';

describe('AddBienComponent', () => {
  let component: AddBienComponent;
  let fixture: ComponentFixture<AddBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
