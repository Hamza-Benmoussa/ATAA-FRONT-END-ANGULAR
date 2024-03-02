import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKafilaComponent } from './add-kafila.component';

describe('AddKafilaComponent', () => {
  let component: AddKafilaComponent;
  let fixture: ComponentFixture<AddKafilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKafilaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKafilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
