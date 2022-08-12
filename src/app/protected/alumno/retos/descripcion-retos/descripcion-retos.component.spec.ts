import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as internal from 'stream';

import { DescripcionRetosComponent } from './descripcion-retos.component';

describe('DescripcionRetosComponent', () => {
  let component: DescripcionRetosComponent;
  let fixture: ComponentFixture<DescripcionRetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionRetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

