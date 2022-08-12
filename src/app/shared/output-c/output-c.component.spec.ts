import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCComponent } from './output-c.component';

describe('OutputCComponent', () => {
  let component: OutputCComponent;
  let fixture: ComponentFixture<OutputCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
