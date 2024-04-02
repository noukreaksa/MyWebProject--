const btns = document.querySelectorAll(".btn-slide");
const bg = document.querySelectorAll(".bg-slide");
var slidebg = function(move){

  btns.forEach((btn)=>{
    btn.classList.remove("active");
  })

  bg.forEach((slide)=>{
    slide.classList.remove("active");
  })

  btns[move].classList.add("active");
  bg[move].classList.add("active");
}

btns.forEach((btn,i)=>{
  btn.addEventListener("click",()=>{
    slidebg(i);
  })
});

// option Active 
const option = document.querySelectorAll(".boxItem");

var activeOption = function(moveobj){
  option.forEach((active)=>{
    active.classList.remove("active");
  })
  option[moveobj].classList.add("active");
}
option.forEach((active,i)=>{
  active.addEventListener("click",()=>{
    activeOption(i);
  })
});

    // move box Form
$(document).ready(function(){
  
  $('#optionTour').click(function(){
    $('#FormTravel').css({ display : "none"})
    $('#FormHotel').css({ display : "none"})
    $('#FormFlight').css({ display : "none"})
    $('#FormTour').css({ display : "flex"})
  })

  $('#optionTravel').click(function(){
    $('#FormTour').css({ display : "none"})
    $('#FormHotel').css({ display : "none"})
    $('#FormFlight').css({ display : "none"})

    $('#FormTravel').css({ display : "flex"})
  })

  $('#optionHotel').click(function(){
    $('#FormTour').css({ display : "none"})
    $('#FormTravel').css({ display : "none"})
    $('#FormFlight').css({ display : "none"})
    $('#FormHotel').css({ display : "flex"})
  })

  $('#optionFlight').click(function(){
    $('#FormTour').css({ display : "none"})
    $('#FormTravel').css({ display : "none"})
    $('#FormHotel').css({ display : "none"})
    $('#FormFlight').css({ display : "flex"})
  })
})
