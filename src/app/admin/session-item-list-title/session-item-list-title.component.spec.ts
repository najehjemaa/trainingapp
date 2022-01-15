import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionItemListTitleComponent } from './session-item-list-title.component';

describe('SessionItemListTitleComponent', () => {
  let component: SessionItemListTitleComponent;
  let fixture: ComponentFixture<SessionItemListTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionItemListTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionItemListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
