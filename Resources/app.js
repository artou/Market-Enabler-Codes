Titanium.UI.setBackgroundColor('#181818');

var tabGroup = Titanium.UI.createTabGroup();

var n = Ti.UI.createNotification({message:L('wait')});

n.duration = Ti.UI.NOTIFICATION_DURATION_SHORT;


n.offsetX = 0;
n.offsetY = 0;

n.show();

var started = new Date().getTime();

setTimeout(function()
{

},0);

var db1 = Titanium.Database.install('pays','pays');
    db1.close();
    
var db = Titanium.Database.install('codes','codes');
    db.close();
    
var win1 = Titanium.UI.createWindow({  
    titleid:'europe',
	url:'codes.js',
    backgroundImage:'/images/bg.png'
});

var tab1 = Titanium.UI.createTab({  
	titleid:'europe',
    icon:'europe.png',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text: L('copy'),
	top:0,
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

var win2 = Titanium.UI.createWindow({  
	url:'rest.js',
    titleid:'other_land',
    backgroundImage:'/images/bg.png'
});


var tab2 = Titanium.UI.createTab({  
	titleid:'other_land',
    icon:'noneurope.png',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text: L('copy'),
	top:0,
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2); 

tabGroup.setActiveTab(1);
tabGroup.open();
