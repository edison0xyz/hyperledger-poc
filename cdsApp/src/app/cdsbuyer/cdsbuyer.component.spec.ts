import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsbuyerComponent } from './cdsbuyer.component';

describe('CdsbuyerComponent', () => {
  let component: CdsbuyerComponent;
  let fixture: ComponentFixture<CdsbuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdsbuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdsbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
