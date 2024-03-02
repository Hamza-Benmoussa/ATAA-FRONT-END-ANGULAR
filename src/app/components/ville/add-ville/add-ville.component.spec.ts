import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVilleComponent } from './add-ville.component';

describe('AddVilleComponent', () => {
  let component: AddVilleComponent;
  let fixture: ComponentFixture<AddVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
