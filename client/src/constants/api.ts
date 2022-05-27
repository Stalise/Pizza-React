export enum Urls {
   base_url = 'http://localhost:8000/api/',
   user = "user",
   userAuth = "user/auth",
   userReg = "user/reg",
   userLogout = "user/logout",
   products = "products",
}

export enum apiResponsesMessage {
   success = "success",
   needAuth = "Need authorization",
   notLogged = "Not logged",
   unexpected = "Unexpected error! Please try again later.",
};