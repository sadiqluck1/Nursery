
$('#search').keyup(function(){
	var searchField=$('#search').val();
	console.log(searchField);
	var myExp=new RegExp(searchField,"i");
$.getJSON('data.json',function(data){
var output='<ul class="searchresults">';
$.each(data,function(key,val){	
	if(val.name.search(myExp)!=-1 || val.bio.search(myExp)!=-1)
	{
	output+='<li>';
	output+='<h2>'+val.name+'</h2>';
	output+='<img src="images/'+val.shortname+'.jpg" alt="'+val.name+'"/>';
	output+='<p>' + val.characteristics + '</p>';
	output+='<p>' + val.bio + '</p>';
	output+='</li>';
	}
});
output+='</ul>';
$('#update').html(output);
});	
});
/*
$.getJSON('data.json',function(data){
console.log(data);
});*/
/*$.ajax({
    url: 'C:/Users/sadiq/Desktop/Folder/data.json',
    type: 'GET',
	  async: false,
    jsonpCallback: 'myCallback',
    dataType: "jsonp",
    success: function(data) {
        console.log(data);
    }
});*/