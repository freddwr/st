import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgraficoComponent } from './dgrafico.component';

describe('DgraficoComponent', () => {
  let component: DgraficoComponent;
  let fixture: ComponentFixture<DgraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
