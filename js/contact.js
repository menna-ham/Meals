

export class ContactUs{
    constructor(){
        this.showContact();
        this.welcome;

        this.nameRegex= /^(?=.*?[A-Za-z\s])[A-Za-z+\s]{3,20}$/;
        this.EmailRegex= /^[a-zA-Z0-9@#$%^&-+=()._]+@[A-Za-z0-9.-]+(.com)$/;
        this.phoneRegex=/^01[0125][0-9]{8}$/;
        this.ageRegex= /^[0-9]{0,2}$/;
        this.PassRegex= /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&-+=()._])[a-zA-Z0-9@#$%^&-+=()._]{8,10}/;




        document.getElementById('NameIN').addEventListener('keyup', this.checkName.bind(this))
        document.getElementById('EmailIN').addEventListener('keyup', this.checkEmail.bind(this))
        document.getElementById('PhoneIN').addEventListener('keyup', this.checkPhone.bind(this))
        document.getElementById('AgeIN').addEventListener('keyup', this.checkAge.bind(this))
        document.getElementById('PassIN').addEventListener('keyup', this.checkPass.bind(this))
        document.getElementById('RePassIN').addEventListener('keyup', this.checkRepass.bind(this));

        document.getElementById('submitBtn').addEventListener('click', this.disabledBtn)

    }

    showContact(){
        let cartona = `
        <div class='my-5 d-flex flex-column justify-content-center align-items-center'>
        <h2 class="text-center text-white"> Contact Us </h2>
            <div class="contactSec w-75 h-100 p-3 m-auto d-flex align-items-center justify-content-center">
                <div class="row my-3 h-100">
                    <div class="col-lg-6">
                        <div class="input-group  w-100  m-auto mx-3 mb-4">
                            <input type="text" id='NameIN' class="shadInput w-100 p-3  m-auto " id="exampleFormControlInput1" placeholder="Enter Your Name...">
                            <div id='NameValid' class="alert alert-danger d-none w-100 mt-3" role="alert">
                                your name should be at least 3 chars
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="input-group  w-100  m-auto mx-3 mb-4">
                            <input type="text" id='EmailIN' class="shadInput w-100 p-3  m-auto " id="exampleFormControlInput1" placeholder="Enter Your Email...">
                            <div id='EmailValid' class="alert alert-danger d-none w-100 mt-3" role="alert">
                                ex: mail@mail.com
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="input-group  w-100  m-auto mx-3 mb-4">
                            <input type="text"id='PhoneIN' class="shadInput w-100 p-3 m-auto " id="exampleFormControlInput1" placeholder="Enter Your Phone...">
                            <div id='phoneValid' class="alert alert-danger d-none w-100 mt-3" role="alert">
                                Please enter valid phone number
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="input-group  w-100  m-auto mx-3 mb-4">
                            <input type="text" id='AgeIN' class="shadInput w-100 p-3  m-auto " id="exampleFormControlInput1" placeholder="Enter Your Age...">
                            <div id='AgeValid' class="alert alert-danger d-none w-100 mt-3" role="alert">
                                Please Enter Valid Age
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="input-group  w-100  m-auto mx-3 mb-4">
                            <input type="password" id='PassIN' class="shadInput w-100 p-3  m-auto " id="exampleFormControlInput1" placeholder="Enter Your Password...">
                            <div id='PassValid' class="alert alert-danger d-none w-100 mt-3" role="alert">
                            your password should be [8-10] chars and contains atleast uppercase letter , special char , lowercase and number
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="input-group  w-100  m-auto mx-3 mb-4">
                            <input type="password" id='RePassIN' class="shadInput w-100 p-3  m-auto " id="exampleFormControlInput1" placeholder="Repeat Password...">
                            <div id='rePassValid' class="alert alert-danger d-none w-100 mt-3" role="alert">
                                Not matching to your Password
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12  mt-3">
                        <div class="input-group   w-50  m-auto mb-4">
                            <a  id='submitBtn' class='btn btn-danger m-auto fs-4 '  data-toggle="modal" data-target="#myModal"> Submit</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        `

        //document.querySelector('.contactCont').innerHTML = cartona
        document.querySelector('.allContent').innerHTML= cartona;
    }

    checkName(){
        //this.nameRegex= /^(?=.*?[A-Za-z\s])[A-Za-z+\s]{3,20}$/
        let name= document.getElementById('NameIN');
        let nameVal= name.value;
        let valid = document.getElementById('NameValid');
        let x;

        if(this.nameRegex.test(nameVal))
        {
            valid.classList.remove('d-block');
            valid.classList.add('d-none');
            name.classList.add('is-valid')
            name.classList.remove('is-invalid')

            //console.log('true');
            x=true
            return(x);
        }else{
            valid.classList.remove('d-none');
            valid.classList.add('d-block');
            name.classList.add('is-invalid')
            name.classList.remove('is-valid')
            x=false
            return(x);
        }
        

    }
    checkEmail(){
       // this.EmailRegex= /^[a-zA-Z0-9@#$%^&-+=()._]+@[A-Za-z0-9.-]+(.com)$/;
        let email= document.getElementById('EmailIN');
        let emailVal= email.value;
        let valid = document.getElementById('EmailValid')

        if(this.EmailRegex.test(emailVal))
        {
            valid.classList.remove('d-block');
            valid.classList.add('d-none');
            email.classList.add('is-valid')
            email.classList.remove('is-invalid')

            console.log('true');
            return(true);

        }else{
            valid.classList.remove('d-none');
            valid.classList.add('d-block');
            email.classList.add('is-invalid')
            email.classList.remove('is-valid')
            return(false);

        }
        

    }
    checkPhone(){
        //this.phoneRegex=/^01[0125][0-9]{8}$/;
        let phone= document.getElementById('PhoneIN');
        let phoneVal= phone.value;
        let valid = document.getElementById('phoneValid')

        if(this.phoneRegex.test(phoneVal))
        {
            valid.classList.remove('d-block');
            valid.classList.add('d-none');
            phone.classList.add('is-valid')
            phone.classList.remove('is-invalid')

            console.log('true');
            return(true);
        }else{
            valid.classList.remove('d-none');
            valid.classList.add('d-block');
            phone.classList.add('is-invalid')
            phone.classList.remove('is-valid')
            return(false);

        }

    }
    checkAge(){
        //this.ageRegex= /^[0-9]{0,2}$/;
        let age= document.getElementById('AgeIN');
        let agelVal= age.value;
        let valid = document.getElementById('AgeValid')

        if(this.ageRegex.test(agelVal))
        {
            valid.classList.remove('d-block');
            valid.classList.add('d-none');
            age.classList.add('is-valid')
            age.classList.remove('is-invalid')

            console.log('true');
            return(true);

        }else{
            valid.classList.remove('d-none');
            valid.classList.add('d-block');
            age.classList.add('is-invalid')
            age.classList.remove('is-valid')
            return(false);

        }
    }
    checkPass(){
        //this.PassRegex= /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&-+=()._])[a-zA-Z0-9@#$%^&-+=()._]{8,10}/;
        let pass= document.getElementById('PassIN');
        let passVal= pass.value;
        let valid = document.getElementById('PassValid')

        if(this.PassRegex.test(passVal))
        {
            valid.classList.remove('d-block');
            valid.classList.add('d-none');
            pass.classList.add('is-valid')
            pass.classList.remove('is-invalid')

            console.log('true');
            return(true);

        }else{
            valid.classList.remove('d-none');
            valid.classList.add('d-block');
            pass.classList.add('is-invalid')
            pass.classList.remove('is-valid');
            console.log('false');
            return(false);


        }
        

    }
    checkRepass(){
        let pass = document.getElementById('PassIN');
        let repass = document.getElementById('RePassIN');
        let passVal = pass.value;
        let rePassVal = repass.value;
        let valid = document.getElementById('rePassValid')

        if(passVal == rePassVal)
        {
            valid.classList.remove('d-block');
            valid.classList.add('d-none');
            repass.classList.add('is-valid')
            repass.classList.remove('is-invalid');

            return(true);

        }else{
            valid.classList.remove('d-none');
            valid.classList.add('d-block');
            repass.classList.add('is-invalid')
            repass.classList.remove('is-valid');
            console.log('false');
            return(false);
        }



    }

    disabledBtn(){
        let name= document.getElementById('NameIN');
        let email= document.getElementById('EmailIN');
        let phone= document.getElementById('PhoneIN');
        let age= document.getElementById('AgeIN');
        let pass= document.getElementById('PassIN');
        let repass = document.getElementById('RePassIN');



        let nameRegex= /^(?=.*?[A-Za-z\s])[A-Za-z+\s]{3,20}$/;
        let EmailRegex= /^[a-zA-Z0-9@#$%^&-+=()._]+@[A-Za-z0-9.-]+(.com)$/;
        let phoneRegex=/^01[0125][0-9]{8}$/;
        let ageRegex= /^[0-9]{0,2}$/;
        let PassRegex= /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&-+=()._])[a-zA-Z0-9@#$%^&-+=()._]{8,10}/;
        


        if( nameRegex.test(name.value) && EmailRegex.test(email.value) && phoneRegex.test(phone.value) && ageRegex.test(age.value) && PassRegex.test(pass.value) && pass.value == repass.value  )
        {
            $('#submitBtn').attr('disabled',false);
            console.log('true from disabled');
            this.welcome = this.welcomeCard(name);
            alert('Thanks for Contacting Us')
            //this.welcome(name.value)
            //this.welcomeCard(name.value)
        }else{
            console.log('False from disabled');
            $('#submitBtn').attr('disabled',true)
            
        }

    }

    welcomeCard(name){
        let cartona =`
        <h1 class="text-center text-success"> Welcome${name} </h1>
        <p class="text-center text-success fs-3" > Thank for Conracting Us </p>
        `;
        document.querySelector('.welcome').innerHTML= cartona
    }
}