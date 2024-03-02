import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssocitationComponent } from './add-associtation.component';

describe('AddAssocitationComponent', () => {
  let component: AddAssocitationComponent;
  let fixture: ComponentFixture<AddAssocitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssocitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAssocitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
