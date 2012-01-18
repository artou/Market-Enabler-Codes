Ti.include('menu.js');
Ti.include('rate.js');

var win = Ti.UI.createWindow({
})

			
var search = Titanium.UI.createSearchBar({
	height:43,
	showCancel:true,
	hinttextid:'search'
});

var db= Titanium.Database.open('codes');

var rows = db.execute("SELECT EU, COUNTRY, OPERATOR, CODE, FLAG FROM codes WHERE EU LIKE 'no' ORDER BY COUNTRY ASC");
    db.close();

var data= [];
while (rows.isValidRow())
    {

    var row = Titanium.UI.createTableViewRow({
		backgroundColor:'#000000',
		search:rows.fieldByName('COUNTRY'),
		className: 'rowCode'
});

	var flag =  Titanium.UI.createImageView({
		url:rows.fieldByName('FLAG'),
		width:48,
		height:48,
		left:0,
		top:10,
		className: 'rowFlag'
	});
	row.add(flag);
	
    var provider = Titanium.UI.createLabel({
    	text:rows.fieldByName('OPERATOR'),
		color:'#ffffff',
    	font:{fontSize:18, fontWeight:'bold'},
		top:2,
    	left:55,
    	height:'auto',
		className: 'rowProvider'
    });
	row.add(provider);
	
	var land = Titanium.UI.createLabel({
    	text:rows.fieldByName('COUNTRY'),
		color:'#C0C0C0',
    	font:{fontSize:14, fontWeight:''},
		bottom:2,
    	left:55,
    	height:'auto',
		className: 'rowLand'
    });
	row.add(land);
	
	var copy = Titanium.UI.createButton({
		title:rows.fieldByName('CODE'),
		color:'#000000',
		font:{fontSize:17,fontWeight:'bold'},
		height:50,
		width:80,
		top:10,
		right:0,
		className: 'rowCopy'
	});
	row.add(copy);
	
	row.code = rows.fieldByName('CODE');
    row.className = 'tour_row';
	data.push(row);
	rows.next(); 
 };
 	rows.close();
 	
 var TheTable = Titanium.UI.createTableView({
		top:45,
		search:search,
		searchHidden:true,
		filterAttribute: 'search'
});

TheTable.setData(data);
win.add(TheTable);

TheTable.addEventListener('click', function(e) {

Titanium.UI.Clipboard.setText(e.row.code);

var n = Ti.UI.createNotification({message:L('copied')});
n.duration = Ti.UI.NOTIFICATION_DURATION_SHORT;

n.offsetX = 0;
n.offsetY = 200;

n.show();
 
    var intent = Titanium.Android.createIntent({
		packageName: 'ch.racic.android.marketenabler',
		className: 'ch.racic.android.marketenabler.Splash',
 });
 
    intent.addCategory(Titanium.Android.CATEGORY_LAUNCHER);
	
    var pending = Titanium.Android.createPendingIntent({
        activity: Titanium.Android.currentActivity,
        intent: intent,
        type: Titanium.Android.PENDING_INTENT_FOR_ACTIVITY,
        flags: Titanium.Android.FLAG_ACTIVITY_NEW_TASK
    });
 

    notification = Ti.Android.createNotification({
        contentIntent : pending,
        contentTitle : 'Already copied on the clipboard?',
        contentText : 'Click here to open Market Enabler!',
		tickerText : 'Click here to open Market Enabler!',
		icon: 0x7f020000,
        when : new Date().getTime()
    });
 
    Ti.Android.NotificationManager.notify(1, notification);
});
var activity = Ti.Android.currentActivity;

var LOGIN = 1, RESTORE = 2, ABOUT = 3;
var loggedIn = false;
activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
    var login = menu.add({ title: "Delete", itemId: LOGIN });
    login.setIcon(Titanium.Android.R.drawable.ic_menu_delete);
    login.addEventListener("click", function(e) {
        var win1 = Titanium.UI.createWindow({  
        	backgroundColor:'black',
			url:'add.js',
			title:'Market Enabler Codes - Delete'
});
Titanium.UI.currentTab.open(win1,{animated:true});
    });
    
        var restore = menu.add({ title: "Restore ALL", itemId: RESTORE });
    restore.setIcon(Titanium.Android.R.drawable.ic_menu_revert);
    restore.addEventListener("click", function(e) {
       var alertWindow = Titanium.UI.createAlertDialog({
    title: 'Restore all countries',
    message: 'Do you really want to restore all countries ?\u000AThe change take effect after app reboot.',
    cancel:1,
    buttonNames: ['Restore all','Cancel']
});
 
alertWindow.addEventListener('click',function(ev){
    Titanium.API.info( "cancel " + ev.cancel );
    Titanium.API.info( "index " + ev.index );
    Titanium.API.info( "index " + ev.source );
    switch(ev.index)
    {
    case 0:
    
    var dbOLD = Titanium.Database.install('pays','pays');
    dbOLD.remove();
    var db1 = Titanium.Database.install('pays','pays');
    db1.close();
    
    var dbOLD2 = Titanium.Database.install('codes','codes');
    dbOLD2.remove();
	var db = Titanium.Database.install('codes','codes');
    db.close();
    
    var toast = Titanium.UI.createNotification({
    duration: 2000,
    message: "Restore success, please restart the app!"
});
toast.show();

      Titanium.API.info( "OK button was hit");
      break;
    case 1:
      Titanium.API.info( "cancel button was hit");
      break;
    case 2:
      Titanium.API.info( "Another Choice button was hit");
      break;
    }
});
 
alertWindow.show();
    });
    
        var about = menu.add({ title: "About", itemId: ABOUT });
    about.setIcon(Titanium.Android.R.drawable.ic_menu_info_details);
    about.addEventListener("click", function(e) {
       var win1 = Titanium.UI.createWindow({  
        	backgroundColor:'black',
			url:'delete.js',
			title:'Market Enabler Codes - About'
});
Titanium.UI.currentTab.open(win1,{animated:true});
    });
};
win.open();
