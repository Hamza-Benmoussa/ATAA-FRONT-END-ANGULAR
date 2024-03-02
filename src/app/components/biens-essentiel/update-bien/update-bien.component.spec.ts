import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBienComponent } from './update-bien.component';

describe('UpdateBienComponent', () => {
  let component: UpdateBienComponent;
  let fixture: ComponentFixture<UpdateBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
