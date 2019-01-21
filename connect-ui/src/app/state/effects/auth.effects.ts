import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, defer } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  takeUntil,
  tap
} from 'rxjs/operators';

import { LogIn, LogInSuccess, LogInFailure, LogOut,AuthActionTypes } from '../actions/auth.actions';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) { }

  @Effect()
  Login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    switchMap((payload) => {
      const onLogin$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN)
      );

      return this.authService.logIn(payload).pipe(
        takeUntil(onLogin$),
        map((result: any) => {
      this.router.navigateByUrl('/dashboard');
          
          return new LogInSuccess(result,payload);


        }),
        catchError(error =>
          of(new LogInFailure(error))
        )
      );
    })
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      console.log(user);
      localStorage.setItem('result', JSON.stringify(user.payload));
      localStorage.setItem('payload',JSON.stringify(user.token));
      localStorage.setItem('token', user.token.payload.token);

    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );


  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
     localStorage.clear();
     this.router.navigateByUrl('/');

    })
  );

  @Effect()
  init$ = defer((): Observable<LogInSuccess | LogOut> => {
    const userData = JSON.parse(localStorage.getItem('result'));
    console.log(userData);
    const token = JSON.parse(localStorage.getItem('payload'));
    console.log(token)
    return (userData)
      ? of(new LogInSuccess(userData,token))
      : of(new LogOut());
  });



}