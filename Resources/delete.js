var win = Ti.UI.currentWindow;

var version = Titanium.UI.createLabel({
   	color:'#999',
   	text:'Latest version',
	color:'white',
   	font:{fontSize:22, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	width:'auto',
	left:60,
	top:5,
    });
win.add(version);

var info =  Titanium.UI.createImageView({
	url:Titanium.Android.R.drawable.ic_menu_compass,
	width:48,
	height:48,
	left:0,
	top:10,
});
win.add(info);

var number = Titanium.UI.createLabel({
   	color:'#999',
   	text:'3.5',
	color:'white',
   	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	left:60,
	top:35
    });
    
win.add(number);

var contact = Titanium.UI.createLabel({
   	color:'#999',
   	text:'Contact me',
	color:'white',
   	font:{fontSize:22, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	left:60,
	top:105,
    });
win.add(contact);

contact.addEventListener('click', function(e) {
	    var emailDialog = Titanium.UI.createEmailDialog();
        if (!emailDialog.isSupported()) {
        	Ti.UI.createAlertDialog({
        		title:'Error',
        		message:'Email not available'
        	}).show();
        	return;
        }
        emailDialog.setSubject('From Market Enabler Codes app');
        emailDialog.setToRecipients(['artounet@gmail.com']);
   
   		emailDialog.open();     
});

var mail =  Titanium.UI.createImageView({
	url:Titanium.Android.R.drawable.ic_menu_send,
	width:48,
	height:48,
	left:0,
	top:115,
});
win.add(mail);

var mail = Titanium.UI.createLabel({
   	color:'#999',
   	text:'artounet@gmail.com',
	color:'white',
   	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	left:60,
	top:135,
    });
win.add(mail);

var share = Titanium.UI.createLabel({
   	color:'#999',
   	text:'Share this app',
	color:'white',
   	font:{fontSize:22, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	left:60,
	top:215,
    });
win.add(share);

	share.addEventListener('click',function(e)
{
	
   	var share = createShareOptions()
	Ti.Android.currentActivity.startActivity(share);
 
function createShareOptions(){
 
    var subject = "Download Market Enabler Codes available on the Market !";
    var text = "Market Enabler Codes is a memo list for Market Enabler to find providers codes.\u000ADonwload it ! https://market.android.com/details?id=lu.artou.marketenablercodes"
 	
 	
    var intent = Ti.Android.createIntent({
        action: Ti.Android.ACTION_SEND,
        type: "text/plain",
    });
    intent.putExtra(Ti.Android.EXTRA_TEXT,text);
    intent.putExtra(Ti.Android.EXTRA_SUBJECT,subject);

    var share = Ti.Android.createIntentChooser(intent,'Share this app');
 
    return share;
}
});

var sharing =  Titanium.UI.createImageView({
	url:Titanium.Android.R.drawable.ic_menu_share,
	width:48,
	height:48,
	left:0,
	top:220,
});
win.add(sharing);

var link = Titanium.UI.createLabel({
   	color:'#999',
   	text:'Share with yours friends !',
	color:'white',
   	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	left:60,
	top:245,
    });
win.add(link);

var button5 = Titanium.UI.createButton({
	title:'Info',
	height:40,
	width:200,
	top:320
});

button5.addEventListener('click', function(e) {
	    var win1 = Titanium.UI.createWindow({  
        	backgroundColor:'black',
			url:'fin.js',
			title:'Market Enabler Codes'
});
Titanium.UI.currentTab.open(win1,{animated:true});
});
 
win.add(button5);