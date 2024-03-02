import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKafilaComponent } from './update-kafila.component';

describe('UpdateKafilaComponent', () => {
  let component: UpdateKafilaComponent;
  let fixture: ComponentFixture<UpdateKafilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKafilaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateKafilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
