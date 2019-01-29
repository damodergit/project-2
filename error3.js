  var user = {
    name : "john smith",
    email : "john123@gmail.com",
    password : "john@123"
  }
  var loginUser = (email,password)=>{
    try{
      if(user.email.toString()===email && password===user.password){
        return "welcome    1!: " +user.name
      }else {
        return" not welcome    :"   +user.name;
      }
    }catch(error){
      console.log(error.stack);
      return "not-welcome catch ";
    }
  }
  var res = loginUser("john123@gmail.com","john@123")
 console.log(res );
