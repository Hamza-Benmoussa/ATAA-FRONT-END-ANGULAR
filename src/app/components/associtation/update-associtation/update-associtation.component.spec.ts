import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssocitationComponent } from './update-associtation.component';

describe('UpdateAssocitationComponent', () => {
  let component: UpdateAssocitationComponent;
  let fixture: ComponentFixture<UpdateAssocitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAssocitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAssocitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
