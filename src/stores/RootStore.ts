import authStore from './AuthStore';

class RootStore {
  AuthStore = new authStore();
}

const rootStore = new RootStore();

export const AuthStore = rootStore.AuthStore;

export default rootStore;
