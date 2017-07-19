var page = 0;
var type = "A";

$(function() {
	$('.option').on('click', function(){
		$('#drop_down').toggleClass("drop_down_open");
	});

	document.onclick = function(e){
		 var t = e.target;
		 var i =0;
		 if(t.className == "option") return;

		while(t.className != "drop_down_open" && t.tagName != "BODY"){
			t = t.parentNode;
		}


		if(t.className != "drop_down_open" ){
			$('#drop_down').removeClass("drop_down_open");
		}
	}

	getItems(type, 0);
})

function prev(){
	page--;
	getItems(type, page);
}

function next(){
	page++;
	getItems(type, page);
}

function getItems(t, p){
	type = t;
	page = p; 
	$.ajax({
      type: 'GET',
      url: '/items/' + t + "/" + p,
      success: function(result) {
        $('.items').html(result);
      }
    });
}