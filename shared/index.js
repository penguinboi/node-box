$(document).ready(function() {
  "use strict";

  $("#add").click(function() {
  		$.post("http://localhost:3000/actors", {
          "name": $("#name").val(),
          "starred": false
        },function() {
          $("#name").val("");
        });
  });

  $("#actorList").on('click','button', function() {
  	 var $id = $(this).attr('id');
  	 var $starred = $(this).text();
  	 var $name = $(this).prev('span').children('span').text();
  	 var $star = false;
  	 if ($starred == "star"){
  	 	$star = false;
  	 }
  	 else{
  	 	$star = true;
  	 }
  	 $.ajax({
  	 	"url" : "http://localhost:3000/actors/"+$id,
  	 	"type" : "PUT",
  	 	"data" : {"id":$id, "name":$name, "starred":$star},
  	 }).done(function (response) {
  	 	
  	 }).fail(function (err) {

  	 });
  });

  $.get("http://localhost:3000/actors",function(data){
  	for(var i = 0; i < data.length; i++){
  		var isStarred = "star_border";
  		if(data[i].starred){
  			isStarred = "star"
  		}
  		var temp = i+1;
		$("#actorList").append("<div class=\"mdl-list__item\"><span class=\"mdl-list__item-primary-content\"><i class=\"material-icons mdl-list__item-avatar\">person</i><span>"+data[i].name+"</span></span><button id=\""+temp+"\" class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--colored\" ><i class=\"material-icons\">"+isStarred+"</i></button>");
  	}
  });
});