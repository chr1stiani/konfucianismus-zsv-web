import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAndCurrentComponent } from './history-and-current.component';

describe('HistoryAndCurrentComponent', () => {
  let component: HistoryAndCurrentComponent;
  let fixture: ComponentFixture<HistoryAndCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryAndCurrentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryAndCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
