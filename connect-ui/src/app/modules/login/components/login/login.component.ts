import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';
import { AppState } from '../../../../state/reducers';
import { Store } from '@ngrx/store';
import { LogIn } from '../../../../state/actions/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private appState: Store<AppState>
  ) { }

  ngOnInit() {

  }
  signIn(): void {
    const payload = {
      username: this.user.username,
      password: this.user.password,
      token: btoa(this.user.username + ':' + this.user.password)
    }
    this.appState.dispatch(new LogIn(payload));
  }

}
