const products = [{image: "./Assets/work-1.png",name:"Modern Chair and Table Set",title:"Clean Space.",price:"15,600"},{image: "./Assets/work-2.png",name:"Premium Quality Notebook",title:"Motivate Yourself.",price:"600"},{image: "./Assets/work-3.png",name:"Table Lamp",title:"Content hi nahi hai.",price:"1,600"},{image: "./Assets/work-4.png",name:"Quality Pens",title:"Flair Pen but fair hi hi",price:"300"},{image: "./Assets/work-5.png",name:"LED Monitor",title:"For Professionals.",price:"7,900"},{image: "./Assets/work-6.png",name:"Expensive I-Phone",title:"Out of your and my reach.",price:"50,600",}]

function showProducts(array){
    let clutter =  ``
    array.forEach(prod => {
        clutter += `<div class="product w- rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"><img class="rounded-xl" src="${prod.image}"></div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${prod.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-80">${prod.title}</h3>
                    <h4 class="font-semibold mt-2">$${prod.price}</h4>
                </div>
                <button class="w-10 h-10 rounded-full shader text-yellow-400"><iclass="ri-add-line"></i></button>
            </div>
        </div>
        </div>`
    })
    document.querySelector('.products').innerHTML = clutter;
}

const popularProducts = [,{image: "./Assets/work-5.png",name:"LED Monitor",title:"For Professionals.",price:"7,900"},{image: "./Assets/work-6.png",name:"Expensive I-Phone",title:"Out of your and my reach.",price:"50,600",},{image: "./Assets/work-3.png",name:"Table Lamp",title:"Content hi nahi hai.",price:"1,600"},{image: "./Assets/work-4.png",name:"Quality Pens",title:"Flair Pen but fair hi hi",price:"300"}]

function popularProductsFnc(array){
    let clutter = ``
    array.forEach(prod => {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${prod.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${prod.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${prod.title}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">$${prod.price}</h4>
        </div>
    </div>`
    })
    document.querySelector('.populars').innerHTML = clutter
}

popularProductsFnc(popularProducts)
showProducts(products)