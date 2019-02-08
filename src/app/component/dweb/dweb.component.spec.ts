import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwebComponent } from './dweb.component';

describe('DwebComponent', () => {
  let component: DwebComponent;
  let fixture: ComponentFixture<DwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
