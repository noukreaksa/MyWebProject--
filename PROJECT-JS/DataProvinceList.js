var cardProvinceHistoryTemple =[
{"imgProvince":"../Image/logo-seim reap.jpg",
"nameProvince":"Seim Reap",
"logoProvince":"../Image/logo-seim reap.jpg"
},
{"imgProvince":"../Image/kohke-temple.jpg",
"nameProvince":"Seim Reap",
"logoProvince":"../Image/logo-seim reap.jpg"
},
{"imgProvince":"../Image/banteay meanchey-temple3.jpg",
"nameProvince":"Seim Reap",
"logoProvince":"../Image/logo-banteay meanchey.jpg"
},
{"imgProvince":"../Image/kompong thom-temple3.jpg",
"nameProvince":"Seim Reap",
"logoProvince":"../Image/logo-kompong thom.jpg"
},
{"imgProvince":"../Image/bg-kompong cham.jpg",
"nameProvince":"Seim Reap",
"logoProvince":"../Image/komcham-temple1.jpg"
},
{"imgProvince":"../Image/oddar meanchey-temple2.jpg",
"nameProvince":"Seim Reap",
"logoProvince":"../Image/logo-Oddar meanchey.jpg"
}
];

var cardProvinceBeachSea =[
    {"imgProvince":"../Image/logo-seim reap.jpg",
    "nameProvince":"Seim Reap",
    "logoProvince":"../Image/logo-seim reap.jpg"
    },
    {"imgProvince":"../Image/kohke-temple.jpg",
    "nameProvince":"Seim Reap",
    "logoProvince":"../Image/logo-seim reap.jpg"
    },
    {"imgProvince":"../Image/banteay meanchey-temple3.jpg",
    "nameProvince":"Seim Reap",
    "logoProvince":"../Image/logo-banteay meanchey.jpg"
    },
    {"imgProvince":"../Image/kompong thom-temple3.jpg",
    "nameProvince":"Seim Reap",
    "logoProvince":"../Image/logo-kompong thom.jpg"
    },
    {"imgProvince":"../Image/bg-kompong cham.jpg",
    "nameProvince":"Seim Reap",
    "logoProvince":"../Image/komcham-temple1.jpg"
    },
    {"imgProvince":"../Image/oddar meanchey-temple2.jpg",
    "nameProvince":"Seim Reap",
    "logoProvince":"../Image/logo-Oddar meanchey.jpg"
    }
    ];

function CardProvinceTemple(){
    var display="";

    for(i in cardProvinceHistoryTemple){

        display +=`
        
        <div class="cardProvince relative w-[100%] h-[300px] col-span-1  flex flex-col  overflow-hidden group cursor-pointer shadow-2xl  shadow-black ">
        <img src="../Image/${cardProvinceHistoryTemple[i]['imgProvince']}" width="100%"  class="z-0 h-full object-center group-hover:scale-105 duration-300" alt="">
            <div class="shawdowncard absolute top-0 left-0 z-10 w-full h-full hover:bg-black opacity-50 duration-300">
                <a href="#" class="nameProvince absolute top-5 left-[-500px] z-50   text-white text-2xl md:text-5xl font-mono font-semibold font ">
                ${cardProvinceHistoryTemple[i]['nameProvince']}</a>
            </div>
            <div class="logoProvince absolute bottom-5 right-1 flex justify-center z-10">
                 <img src="../Image/${cardProvinceHistoryTemple[i]['logoProvince']}" class="w-[80%] h-[60px] rounded-[100%] object-center border-2 border-orange-500 shadow-2xl shadow-white" alt="">
          </div>
      </div>
    `;
    
}
document.getElementById('containerProvince').innerHTML =display;
}
CardProvinceTemple();

function CardProvinceBeachSea(){
    var display="";

    for(i in cardProvinceBeachSea){

        display +=`
        
        <div class="cardProvince relative w-[100%] h-[300px] col-span-1  flex flex-col  overflow-hidden group cursor-pointer shadow-2xl  shadow-black ">
        <img src="../Image/${cardProvinceBeachSea[i]['imgProvince']}" width="100%"  class="z-0 h-full object-center group-hover:scale-105 duration-300" alt="">
            <div class="shawdowncard absolute top-0 left-0 z-10 w-full h-full hover:bg-black opacity-50 duration-300">
                <a href="#" class="nameProvince absolute top-5 left-[-500px] z-50   text-white text-2xl md:text-5xl font-mono font-semibold font ">
                ${cardProvinceBeachSea[i]['nameProvince']}</a>
            </div>
            <div class="logoProvince absolute bottom-5 right-1 flex justify-center z-10">
                 <img src="../Image/${cardProvinceBeachSea[i]['logoProvince']}" class="w-[80%] h-[60px] rounded-[100%] object-center border-2 border-orange-500 shadow-2xl shadow-white" alt="">
          </div>
      </div>
    `;
    
}
document.getElementById('containerProvince').innerHTML =display;
}
CardProvinceBeachSea();