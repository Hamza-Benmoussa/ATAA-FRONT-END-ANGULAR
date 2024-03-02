import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiensEssentielComponent } from './biens-essentiel.component';

describe('BiensEssentielComponent', () => {
  let component: BiensEssentielComponent;
  let fixture: ComponentFixture<BiensEssentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiensEssentielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiensEssentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
