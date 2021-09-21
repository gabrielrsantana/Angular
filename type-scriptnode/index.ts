// gabriel rocha santana 21/09/21
interface  UserProps{
    firstName:string
    lastName:string
    userName:string
    email:string
    passWord:string
    cpf:string
    contato:string
    isAdmin:boolean
}
//interface é como uma regra
class User implements UserProps{
    
    constructor(public firstName:string,public lastName:string,public userName:string,
        public email:string,public passWord:string,public cpf:string,public contato:string,public isAdmin:boolean){
       this.firstName=firstName;
       this.lastName=lastName;
       this.userName=userName;
       this.email=email;
       this.passWord=passWord;
       this.cpf=cpf;
       this.contato=contato;
       this.isAdmin=isAdmin;     
    }

    getfirstName(){
        return this.firstName;
    }
    getlastName(){
        return this.lastName;
    }
    getuserName(){
        return this.userName;
    }
    getemail(){
        return this.email;
    }
    getPassWord(){
        return this.passWord;
    }
    getcpf(){
        return this.cpf;
    }
    getcontato(){
        return this.contato;
    }
    getisAdmin(){
        return this.isAdmin;
    }

    setFirstName(nome:string){
        this.firstName=nome;
    }
    setLastName(lastname:string){
        this.lastName=lastname;
    }
    setUserName(newuser:string){
        this.userName=newuser;
    }
    setEmail(newEmail:string){
        this.email=newEmail;
    }
    setPassWord(newpass:string){
        this.passWord=newpass;
    }
    setCpf(newcpf:string){
        this.cpf=newcpf;
    }
    setContato(newContato:string){
        this.contato=newContato;
    }
    setisAdmin(isadmin:boolean){
        this.isAdmin=isadmin;
    }
}//class

let usuario = new User("gabriel","rocha","usergabriel","gabriel@hotmail.com","3654654","7943265656","71991538385",true);

console.log(usuario);
usuario.setFirstName("outro nome");
console.log(usuario);

