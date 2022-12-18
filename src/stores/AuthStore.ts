import {makeAutoObservable, runInAction} from 'mobx';
import {observer} from 'mobx-react';
import {signIn, signOut} from '../api/AuthApi';

const LOGIN_SUCCESS_MASSGE: string = 'success signin';

class AuthStore {
  isLogedIn: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  postSignin = async (email: string, password: string): Promise<void> => {
    const loginMessage: string = await signIn(email, password);
    if (loginMessage === LOGIN_SUCCESS_MASSGE) {
      runInAction(() => {
        this.isLogedIn = true;
      });
    }
  };

  postLogout = async (): Promise<void> => {
    await signOut();
    runInAction(() => {
      this.isLogedIn = false;
    });
  };
}

export default AuthStore;
