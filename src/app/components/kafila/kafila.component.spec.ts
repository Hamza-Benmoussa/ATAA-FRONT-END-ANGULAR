import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafilaComponent } from './kafila.component';

describe('KafilaComponent', () => {
  let component: KafilaComponent;
  let fixture: ComponentFixture<KafilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KafilaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KafilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
