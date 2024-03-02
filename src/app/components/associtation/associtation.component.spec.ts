import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssocitationComponent } from './associtation.component';

describe('AssocitationComponent', () => {
  let component: AssocitationComponent;
  let fixture: ComponentFixture<AssocitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssocitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssocitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
