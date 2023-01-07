{


   // bind()
   
  const Person = {


    Fname: 'Abdulazeez',
    Lname: 'Ibrahim',
    Fullname: function(){
        
      return this.Fname  +" "+ this.Lname
    }

    
}


const Person2 = {

Fname: 'Aliyu',
Lname: 'Musa', 
}

const Fullname = Person.Fullname.bind(Person2)


console.log(Fullname())
}

{


   
  let hello = ''

  hello = function(){

     document.getElementById('demo').innerHTML += this
  }


  window.addEventListener('load', hello)

  document.getElementById('btn').addEventListener('click',hello)


}

{

        
  let hello = ''

  hello = () => {

     document.getElementById('demo').innerHTML += this
  }


  window.addEventListener('load', hello)

  document.getElementById('btn').addEventListener('click',hello)



}


{




class Car {

  constructor(name,color,brand){
      
        this.name = name
        this.color = color
        this.brand = brand
  }

     Context() {

          return `This is a new ${this.brand} ${this.color} ${this.name}`
     }


}


 const car1 = new Car('BMW','Black','2017HK')
 const car2 = new Car('Hunda','White','2017HK')













  console.log(car1.Context())
}