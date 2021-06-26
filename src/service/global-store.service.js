class GlobalStoreService {
  constructor() {
    this._store = {
      blogList: []
    };
  }

  get(key) {
    return this._store[key];
  }

  set(key, value) {
    this._store[key] = value;
  }
}
const GlobalStore  = new GlobalStoreService()
export { GlobalStore } ;
