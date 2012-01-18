if(Ti.App.Properties.hasProperty("includeQuotations")) {
    includeQuotations = Ti.App.Properties.getBool("includeQuotations");
} else {
    Ti.App.Properties.setBool("includeQuotations",true);
}

if(Ti.App.Properties.hasProperty("includeAbstractWords")) {
    includeAbstractWords = Ti.App.Properties.getBool("includeAbstractWords");
} else {
    Ti.App.Properties.setBool("includeAbstractWords",true);
}