import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';
import { LogOut } from '../../../../state/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private appState: Store<AppState>
  ) { }

  ngOnInit() {
  }

  logOut(): void {
    this.appState.dispatch(new LogOut());
  }

}
