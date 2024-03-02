import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVilleComponent } from './update-ville.component';

describe('UpdateVilleComponent', () => {
  let component: UpdateVilleComponent;
  let fixture: ComponentFixture<UpdateVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
