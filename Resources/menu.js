
if (Ti.App.Properties.getString("fin") == null) {
  // first run, do something
 
        var win1 = Titanium.UI.createWindow({  
        	backgroundColor:'black',
			url:'fin.js',
			title:'Market Enabler Codes'
});
Titanium.UI.currentTab.open(win1,{animated:true});

 
  // Now set first_run so that this won't run again
  Ti.App.Properties.setString("fin", 0);
}


if (Ti.App.Properties.getString("first_run") == null) {
  // first run, do something
 
        var win1 = Titanium.UI.createWindow({  
        	backgroundColor:'black',
			url:'add.js',
			title:'Market Enabler Codes'
});
Titanium.UI.currentTab.open(win1,{animated:true});

 
  // Now set first_run so that this won't run again
  Ti.App.Properties.setString("first_run", 0);
}

