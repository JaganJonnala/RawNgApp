//Example 
//We map dynamic object that object should be represented as a database So write interfaces


export interface Task {
  id: number;
  
}


export interface LoginUser{
  
  "access_token": string,
  "token_type": string,
  "expires_in": number,
  "userName": string,
  "Id": string, //this has to be number
  "userTypeID": string, //this has to be number
  "userStatusId": string, //this has to be number
  "emailID": string,
  "firstName": string,
  "lastName": string,
  "contactNumber": string,
  ".issued": string,
  ".expires": string

}


