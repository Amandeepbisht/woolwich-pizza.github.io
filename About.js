// const fs = require('fs');
// const data=fs.readFileSync('./../HTML/data.txt','utf-8');


// var obj=JSON.parse(data)

// console.log(obj.spc_1.name)

// const render_menu=(obj)=>{
//     let html=''
//     html+=`<div class="col-lg-4">
//                 <h3>${obj.spc_1.name}</h3>
//                 <p>${obj.spc_1.toppings}</p>
//             </div>`
//     return html
// }
// document.querySelector('.menu_box').innerHTML=render_menu(obj)

window.addEventListener("resize",function(event){
   let about_us_image = document.querySelector('.about_us_image');
   let about_us_content = document.querySelector('.about_us_content');
   let pizza_lovers_content = document.querySelector('.pizza_lovers_content');
   if((window.getComputedStyle(about_us_image, null).display)=='none'){
    pizza_lovers_content.classList.remove('col-lg-4')
    about_us_content.classList.remove('col-lg-4')
    pizza_lovers_content.classList.add('col-lg-10')
    about_us_content.classList.add('col-lg-10')
   }
   if((window.getComputedStyle(about_us_image, null).display)!='none'){
    about_us_content.classList.remove('col-lg-10')
    about_us_content.classList.add('col-lg-4')
    pizza_lovers_content.classList.remove('col-lg-10')
    pizza_lovers_content.classList.add('col-lg-4')
   }
})

console.log(screen.width)

// const speciality_pizza=[
//     {
//         name:"Meat Lovers",
//         toppings:"Pepperoni, Bacon, Sausage, Beef Crumbles",
//         price:""
//     },
//    {
//         name:"Deluxe",
//         toppings:"Pepperoni, Sausage, Red Onion, Green Peppers, Mushrooms",
//         price:""
//     },
//     {
//         name:"Canadian",
//         toppings:"Pepperoni, Bacon, Mushrooms",
//         price:""
//     },
//     {
//         name:"Hawaiian",
//         toppings:"Ham, Bacon, Pineapples",
//         price:""
//     },
//     {
//         name:"Veggie",
//         toppings:"Red Onions, Green Peppers, Mushrooms, Jalapeno, Black Olives",
//         price:""
//     },
//     {
//         name:"BBQ Chicken",
//         toppings:"BBQ Sauce, Chicken, Red Onions, Green Peppers",
//         price:""
//     },
//     {
//         name:"Butter Chicken",
//         toppings:"Butter Sauce, Chicken, Red Onions, Green Peppers",
//         price:""
//     }
// ]

// const classic_pizza=[
//     {
//         name:"Cheese",
//         toppings:"Mozzarella Cheese",
//         price:""
//     },
//     {
//         name:"Pepperoni",
//         toppings:"Mozzarella Cheese, Pepperoni",
//         price:""
//     }

// ]
// const dessert=[
//     {
//         name:"Cookie",
//         toppings:" ",
//         price:"$0.99"
//     },
//     {
//         name:"Brownie",
//         toppings:"",
//         price:"$1.99"
//     },
//     {
//         name:"Cinnamon Bites",
//         toppings:"",
//         price:"$4.99"
//     }

// ]
// const sides=[
//     {
//         name:"Wings",
//         toppings:" ",
//         price:"$9.99"
//     },
//     {
//         name:"Potato Wedges",
//         toppings:" ",
//         price:"$4.49"
//     },
//     {
//         name:"Bread Sticks",
//         toppings:" ",
//         price:"$4.99"
//     },
//     {
//         name:"Stuffed Cheese Bread",
//         toppings:" ",
//         price:"$8.99"
//     },
//     {
//         name:"Stuffed Cheese Bread with Bacon",
//         toppings:" ",
//         price:"$9.99"
//     },
//     {
//         name:"Salads",
//         toppings:" ",
//         price:"$6.99"
//     },
//     {
//         name:"Dippings",
//         toppings:" ",
//         price:"$1.25"
//     },
//     {
//         name:"Extra Topping",
//         toppings:" ",
//         price:"$1.75"
//     },
//     {
//         name:"Can of Pop",
//         toppings:" ",
//         price:"$1.49"
//     },
//     {
//         name:"Bottle of Pop",
//         toppings:" ",
//         price:"$2.49"
//     } ,
//     {
//         name:"Bottle of Pop (2 lt.)",
//         toppings:" ",
//         price:"$3.49"
//     }     
    
// ]
// const combos=[
//     {
//         name:"Combo-1",
//         toppings:"2 Pizza 3 Toppings Each + 2 Dips + 2 Cans **{chicken,beef counts as 2 toppings}**",
//         price:"M: $23.99, L: $27.99"
//     },
//     {
//         name:"Combo-2",
//         toppings:"1 Pizza 4 Toppings + Wings + Dip **{chicken,beef counts as 2 toppings}**",
//         price:"M: $24.49, L: $26.49"
//     },
//     {
//         name:"Combo-3",
//         toppings:"1 Speciality Pizza + Dip + Can",
//         price:"M: $16.49, L: $18.49"
//     },
//     {
//         name:"Combo-4",
//         toppings:"5 Speciality Pizzas + 2 lt. Drink",
//         price:"M: $70.95, L: $82.95"
//     }

// ]

// //document.querySelector('.map').innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.4067858422377!2d-80.48396732337604!3d43.4938488627221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf3073398a217%3A0xed8136d8ccdd444d!2s255%20Woolwich%20St%2C%20Waterloo%2C%20ON%20N2K%200C8!5e0!3m2!1sen!2sca!4v1714232859821!5m2!1sen!2sca" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

// const render_menu=(obj)=>{
//     let menu_box_speciality=document.querySelector('.menu_box_speciality')
//     let menu_box_classic=document.querySelector('.menu_box_classic')
//     let menu_box_combos=document.querySelector('.menu_box_combos')
//     let menu_box_dessert=document.querySelector('.menu_box_dessert')
//     let menu_box_sides=document.querySelector('.menu_box_sides')
//     console.log(obj.length)
//     console.log(obj)
//     for(let i=0;i<(obj.length);i++){
//         let div=document.createElement('div')
//         div.classList.add("col-lg-6")
//         div.classList.add("col-sm-12")
//         div.classList.add("pb-2")
        
//         div.innerHTML=`
//                     <h5 class="content_text_menu_headings";>${obj[i].name}</h5>
//                     <p class="price">${obj[i].price}</p>
//                     <p class="content_text_menu">${obj[i].toppings}</p>
//                     `
//         if(obj.length==7){menu_box_speciality.appendChild(div)}
//         else if(obj.length==2){menu_box_classic.appendChild(div)}
//         else if(obj.length==3){menu_box_dessert.appendChild(div)}
//         else if(obj.length==11){menu_box_sides.appendChild(div)}
//         else{menu_box_combos.appendChild(div)}
        
//     }

// }


// render_menu(classic_pizza)
// render_menu(speciality_pizza)
// render_menu(combos)
// render_menu(dessert)
// render_menu(sides)


let mobile=document.querySelector('.mobile')
let main=document.querySelector('.main')
let options=document.querySelector('.options')
let close_button=document.querySelector('.close_button')
let instagram=document.querySelector('.fa-instagram')
let facebook=document.querySelector('.fa-facebook')
mobile.style.display='none';

options.addEventListener('click',toggle_screen=()=>{
    if(mobile.style.display='none'){
        main.style.display='none';
        mobile.style.display='block';
    }
})

close_button.addEventListener('click',my_function=()=>{
    main.style.display='block';
    mobile.style.display='none';
})

instagram.addEventListener('click',inst_fn=()=>{
   //window.open("https://www.instagram.com/woolwich_pizza?igsh=MWN2cXh4dzc0amhmbQ%3D%3D&utm_source=qr")
   console.log("insta_link")
})

// facebook.addEventListener('click',fb_fn=()=>{
//    window.open("https://www.facebook.com/share/khv2ARydwVXGFryk/?mibextid=LQQJ4d")
// })

let menu_button=document.querySelector(".menu_button")

window.scrollTo(0,1200)
