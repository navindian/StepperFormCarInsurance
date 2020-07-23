import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComponent } from './tab.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabComponent],
      imports: []
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TabComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle by default', async(() => {
    expect(component.policyTabToggle).toBeTruthy();
  }));

  it('should not toggle on calling changeTab function', async(() => {
    component.changeTab(1);
    expect(component.policyTabToggle).toBeFalsy();
    expect(component.activeTab).toEqual(1);
  }));

  it('should have zero active tabs on calling switch function', async(() => {
    component.switch(1);
    expect(component.activeTab).toEqual(0);
    expect(component.mtplCalculatorStep).toEqual(1);
  }));
});
