var win = Ti.UI.currentWindow;

var db= Titanium.Database.open('pays');

var rows = db.execute("SELECT pays FROM pays ORDER BY pays ASC");
    db.close();
    
var note = Titanium.UI.createLabel({
   	color:'#999',
   	text:'For more speed, you can delete the countries you not want using. The change will be made after restart the app ! ',
	color:'white',
   	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:10,
    });
win.add(note);

var data= [];
while (rows.isValidRow())
    {

    var row = Titanium.UI.createTableViewRow({
		backgroundColor:'#000000',
		className: 'rowCode'
});

	var cross =  Titanium.UI.createImageView({
		url:Titanium.Android.R.drawable.ic_delete,
		height:48,
		width:48,
		right:0,
		className: 'rowFlag'
	});
	row.add(cross);
	
    var pays = Titanium.UI.createLabel({
    	text:rows.fieldByName('PAYS'),
		color:'#ffffff',
     	left:2,
    	height:'auto',
		className: 'rowProvider',
   font:{
     fontSize:20,
     fontWeight:'bold'
   },
   color:'#ffffff'
 });
	row.add(pays);
	row.select = pays;
	row.pays = rows.fieldByName('PAYS');
    row.className = 'tour_row';
	data.push(row);
	rows.next(); 
 };
 	rows.close();
 	
 var TheTable = Titanium.UI.createTableView({
		top:95,

});

TheTable.setData(data);
win.add(TheTable);

TheTable.addEventListener('click', function(e) {
	               
var db1= Titanium.Database.open('pays');
var rows = db1.execute("DELETE FROM pays WHERE pays LIKE '" + e.row.pays + "'");
db1.close();
var db= Titanium.Database.open('codes');
var rows = db.execute("DELETE FROM codes WHERE COUNTRY LIKE '" + e.row.pays + "'");
db.close();
TheTable.deleteRow(e.index);
   
});
