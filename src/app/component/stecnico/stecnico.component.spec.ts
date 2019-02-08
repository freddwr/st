import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StecnicoComponent } from './stecnico.component';

describe('StecnicoComponent', () => {
  let component: StecnicoComponent;
  let fixture: ComponentFixture<StecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
