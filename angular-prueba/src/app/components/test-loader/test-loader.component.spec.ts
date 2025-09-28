import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLoaderComponent } from './test-loader.component';

describe('TestLoaderComponent', () => {
  let component: TestLoaderComponent;
  let fixture: ComponentFixture<TestLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
