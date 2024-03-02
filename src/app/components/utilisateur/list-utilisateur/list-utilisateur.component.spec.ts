import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtilisateurComponent } from './list-utilisateur.component';

describe('ListUtilisateurComponent', () => {
  let component: ListUtilisateurComponent;
  let fixture: ComponentFixture<ListUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
