import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssociationComponent } from './update-association.component';

describe('UpdateAssociationComponent', () => {
  let component: UpdateAssociationComponent;
  let fixture: ComponentFixture<UpdateAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAssociationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
