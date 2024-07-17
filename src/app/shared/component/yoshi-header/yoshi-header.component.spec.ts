import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoshiHeaderComponent } from './yoshi-header.component';

describe('YoshiHeaderComponent', () => {
  let component: YoshiHeaderComponent;
  let fixture: ComponentFixture<YoshiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoshiHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoshiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
