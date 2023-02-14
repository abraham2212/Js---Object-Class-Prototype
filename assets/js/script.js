

"use strict"


let stu1 = {

    name: "konul",
    surname: "ibrahimova",
    email: "konull@gmail.com"


}

stu1.address = "neftciler";

console.log(stu1.address)


console.log(stu1.name)

for (const key in stu1) {

    console.log(key + "/" + stu1[key])
}


let user = {};
user.name = "pervin"
console.log(user.name)


console.log(stu1.edication.name)




let stu2 = {

    id: 1,
    name: "Eli",
    surname: "Talibov",
    address: "xetai"



}





let stu3 = {

    id: 1,
    name: "vuqar",
    surname: "aliyev",
    address: "xetai"



}



let stu4 = {

    id: 1,
    name: "alex",
    surname: "Talibov",
    address: "xetai"



}


let stu5 = {

    id: 1,
    name: "Eli",
    surname: "elizade",
    address: "sedmoy"



}


let group ={


    naem:'p125',
    capacity:3,
    students:[],
    addStudent:function(){
        console.log(this)
    }

}
console.log(group.addStudent)

group.addStudent(stu2)
group.addStudent(stu3)
group.addStudent(stu4)
group.addStudent(stu5)

group.addStudent()


let group1={

name:"p130",
capacity:3,
students:[],

addStudent:function(student){


    let stu = this.students.find(s=>s.id==student.id);

    if(stu!=undefined){
        console.log("exsist")
        return;
    }
    if(this.students.length==this.capacity){
        console.log("group already filled")
        return;
    }



    this.students.push(student)
}



}



let user = {

name:"elcan",
company:{


    name:"code academy",
    rooms:[
         {
           name: "yupiter",
           capacity:15,
           computers:["hp","apple","acer"]


         },
         {



            name:"sturun",
            capacity:10
         }




    ]
}

}

function getRoomCapacityByUser(user){

    let rooms=user.company.rooms

    console.log(rooms)

}
getRoomCapacityByUser()
