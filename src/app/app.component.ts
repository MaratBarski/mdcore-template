import { Component } from '@angular/core';
import { TranslateService, userSelector, UserInfo, CheckBoxListOption, TabItemModel, SplitButtonAction, SelectOption } from '@mdclone/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'mdc-core-sample';
  myVal = true;

  buttonActions: any;
  tabs: Array<TabItemModel>;
  tabActive = 1;
  serachText = '';
  currentComponent = 'Tabulator';

  isSwitched = true;
  isSwitched1 = false;

  components = [
    { name: 'Tabulator' },
    { name: 'Button' },
    { name: 'CheckBox list' },
    { name: 'Search' },
    { name: 'Split button' },
    { name: 'Toggle' },
    { name: 'Icons' },
    { name: 'Combobox' },
    { name: 'Login' }
  ];

  icons = [
    { path: 'ic-plus' },
    { path: 'ic-search' },
    { path: 'ic-filter' },
    { path: 'ic-business-warning' },
    { path: 'ic-failure' },
    { path: 'ic-warning' },
    { path: 'ic-success' },
    { path: 'ic-running' },
    { path: 'ic-error' },
    { path: 'ic-shared' },
    { path: 'ic-key' },
    { path: 'ic-upload' },
    { path: 'ic-check' },
    { path: 'ic-close' },
    { path: 'ic-info' },
    { path: 'ic-help' },
    { path: 'ic-synthetic-data' },
    { path: 'ic-dot-menu' },
    { path: 'ic-pager-arr-left' },
    { path: 'ic-pager-arr-right' },
    { path: 'ic-select-arr-down' },
    { path: 'ic-edit' },
    { path: 'ic-view' },
    { path: 'ic-duplicate' },
    { path: 'ic-download' },
    { path: 'ic-quality' },
    { path: 'ic-send' },
    { path: 'ic-remove' },
    { path: 'ic-delete' },
    { path: 'ic-external-link' },
    { path: 'ic-numeric' },
    { path: 'ic-textual' },
    { path: 'ic-calendar' },
    { path: 'ic-and' },
    { path: 'ic-or' }
  ];

  selectTab(tab: number): void { this.tabActive = tab; }

  chbOptions: Array<CheckBoxListOption>;

  showComponent(name: string): void {
    this.currentComponent = name;
  }

  constructor(private ts: TranslateService, private store: Store<any>) {
    store.select(userSelector).subscribe((u: UserInfo) => {
      console.log(u.token)
    });
    this.initCheckBoxList();
    this.initTabs();
    this.initSplitButton();
    this.initCombo();
  }

  btnClick(): void {
    alert('btnClick');
  }

  initCheckBoxList(): void {
    this.chbOptions = [];
    for (let i = 0; i < 10; i++) {
      this.chbOptions.push({
        text: `Option number: ${i + 1}`,
        isChecked: false
      })
    }
  }

  initTabs(): void {
    this.tabs = [];
    for (let i = 0; i < 5; i++) {
      this.tabs.push({
        title: `Page_${i + 1}`,
        text: `Text for page: ${i + 1}`
      } as any)
    }
  }

  initSplitButton(): void {
    this.buttonActions = [];
    for (let i = 0; i < 5; i++) {
      this.buttonActions.push({
        text: `Action event N: ${i + 1}`
      })
    }
  }

  selectOptions: Array<SelectOption>;
  selectedOption: SelectOption;

  initCombo(): void {
    this.selectOptions = [];
    for (let i = 0; i < 10; i++) {
      this.selectOptions.push({
        text: `Option number : ${i + 1}`
      })
    }
    this.selectedOption = this.selectOptions[1];
  }

  actionClick(action: SplitButtonAction): void {
    alert(action.text);
  }

  serachComplite(text: string): void {
    this.serachText = text;
  }

  changed(option: SelectOption): void {
    console.log(option.text);
  }

  cancel(): void { }
  apply(): void { }

  loginFail(text: string): void {
    alert(text);
  }

  afterLogin(): void {
    console.log('Loged in');
  }
}
