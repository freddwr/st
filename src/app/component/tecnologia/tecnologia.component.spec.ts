import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaComponent } from './tecnologia.component';

describe('TecnologiaComponent', () => {
  let component: TecnologiaComponent;
  let fixture: ComponentFixture<TecnologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
