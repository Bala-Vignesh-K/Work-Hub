export class User {
    constructor(
        public email: string,
        public id: string,
        private access_token: string,
        private token_type: string,
        private _tokenExpirationDate: Date
        ) {} 

    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null
        }
        return this.access_token

    }
}