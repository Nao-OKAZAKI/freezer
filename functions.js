//===============** Basic data **===============//
var Nfoods = 3;
var image_name = ['spinach.png','komatsuna.png','broccoli.png'];
var food_name = ["ほうれんそう", "こまつな", "ブロッコリー"];

//-----------------------------------//
//           search_file
//-----------------------------------//
var search_file = function(food){
    
    var index = -1;
        
    for(var cn=0;cn< Nfoods; cn++){
	if(food_name[cn] != food) continue;    
	index = cn;
    }
    
    if(index < 0){return 'xxxx';}
    else{return image_name[index];}
    
};
//-----------------------------------//
//           test
//-----------------------------------//
var test = function(){
    target = document.getElementById("id_food").value
    var file_card = search_file(target);
    
    var canvas = document.getElementById('id_card');
    var context = canvas.getContext("2d");

    var obj_img = new Image();
    obj_img.src = file_card;

    context.drawImage(obj_img,0,0,250,180,10,10,135,68);
};



    
 
