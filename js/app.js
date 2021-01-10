'use strict';
var hours=[6,7,8,9,10,11,12,1,2,3,4,5,6,7];

var Seattle	={
    minCustPerHour :23 ,
    maxCustPerHour  :65 ,
    avgCookiesPerHour :6.3 ,
    custPerHour : 0,
    cookiesPerHour:null,
    totalCookies:0,
    calCustPerHour : function(){
        var randNum1;
        var customerNum=new Array();
        for (var i = 0; i < hours.length; i++) {
         randNum1= Math.floor(Math.random()*(this.maxCustPerHour-this.minCustPerHour+1)+this.minCustPerHour);
         customerNum[i]=randNum1;
        }
         this.custPerHour= customerNum;
    },
    calCookiesPerHour :function(){
        var cookies=[0] ;
        var totalCookies=0;
        for (var i = 0; i < hours.length; i++) {
            cookies[i] = Math.round(this.custPerHour[i]*this.avgCookiesPerHour);
            totalCookies=totalCookies+cookies;
        }
         this.cookiesPerHour=cookies;
         this.totalCookies=totalCookies;
    }
};
Seattle.calCustPerHour();
Seattle.calCookiesPerHour();





var Tokyo	={
    minCustPerHour :3 ,
    maxCustPerHour  : 24,
    avgCookiesPerHour :1.2 ,
    custPerHour : 0,
    cookiesPerHour:null,
    totalCookies:0,
    calCustPerHour : function(){
        var randNum1;
        var customerNum=new Array();
        for (var i = 0; i < hours.length; i++) {
         randNum1= Math.floor(Math.random()*(this.maxCustPerHour-this.minCustPerHour+1)+this.minCustPerHour);
         customerNum[i]=randNum1;
        }
         this.custPerHour= customerNum;
    },
    calCookiesPerHour :function(){
        var cookies=[0] ;
        var totalCookies=0;
        for (var i = 0; i < hours.length; i++) {

            cookies[i] = Math.round(this.custPerHour[i]*this.avgCookiesPerHour);
            totalCookies=totalCookies+cookies;
            
        }
         this.cookiesPerHour=cookies;
         this.totalCookies=totalCookies;
    }
};
Tokyo.calCustPerHour();
Tokyo.calCookiesPerHour();




var Dubai	={
    minCustPerHour :11 ,
    maxCustPerHour  :38 ,
    avgCookiesPerHour :3.7 ,
    custPerHour : 0,
    cookiesPerHour:null,
    totalCookies:0,
    calCustPerHour : function(){
        var randNum1;
        var customerNum=new Array();
        for (var i = 0; i < hours.length; i++) {
         randNum1= Math.floor(Math.random()*(this.maxCustPerHour-this.minCustPerHour+1)+this.minCustPerHour);
         customerNum[i]=randNum1;
        }
         this.custPerHour= customerNum;
    },
    calCookiesPerHour :function(){
        var cookies=[0] ;
        var totalCookies=0;
        for (var i = 0; i < hours.length; i++) {

            cookies[i] = Math.round(this.custPerHour[i]*this.avgCookiesPerHour);
            totalCookies=totalCookies+cookies;
            
        }
         this.cookiesPerHour=cookies;
         this.totalCookies=totalCookies;
    }
};
Dubai.calCustPerHour();
Dubai.calCookiesPerHour();




var Paris	={
    minCustPerHour :20 ,
    maxCustPerHour  :38 ,
    avgCookiesPerHour :2.3 ,
    custPerHour : 0,
    cookiesPerHour:null,
    totalCookies:0,
    calCustPerHour : function(){
        var randNum1;
        var customerNum=new Array();
        for (var i = 0; i < hours.length; i++) {
         randNum1= Math.floor(Math.random()*(this.maxCustPerHour-this.minCustPerHour+1)+this.minCustPerHour);
         customerNum[i]=randNum1;
        }
         this.custPerHour= customerNum;
    },
    calCookiesPerHour :function(){
        var cookies=[0] ;
        var totalCookies=0;
        for (var i = 0; i < hours.length; i++) {

            cookies[i] = Math.round(this.custPerHour[i]*this.avgCookiesPerHour);
            totalCookies=totalCookies+cookies;
            
        }
         this.cookiesPerHour=cookies;
         this.totalCookies=totalCookies;
    }
};
Paris.calCustPerHour();
Paris.calCookiesPerHour();





var Lima	={
    minCustPerHour :2 ,
    maxCustPerHour  :16 ,
    avgCookiesPerHour :4.6 ,
    custPerHour : 0,
    cookiesPerHour:null,
    totalCookies:0,
    calCustPerHour : function(){
        var randNum1;
        var customerNum=new Array();
        for (var i = 0; i < hours.length; i++) {
         randNum1= Math.floor(Math.random()*(this.maxCustPerHour-this.minCustPerHour+1)+this.minCustPerHour);
         customerNum[i]=randNum1;
        }
         this.custPerHour= customerNum;
    },
    calCookiesPerHour :function(){
        var cookies=[0] ;
        var totalCookies=0;
        for (var i = 0; i < hours.length; i++) {
            cookies[i] = Math.round(this.custPerHour[i]*this.avgCookiesPerHour);
            totalCookies=totalCookies+cookies;
        }
         this.cookiesPerHour=cookies;
         this.totalCookies=totalCookies;
    }
};
Lima.calCustPerHour();
Lima.calCookiesPerHour();

var body = document.getElementById("salesBody");
function printEachLocation(location){
    var cookiesPerHourTemp=new Array();
    var totalCookies=0;
    switch(location){
        case "Seattle" : cookiesPerHourTemp=Seattle.cookiesPerHour;break;
        case "Tokyo" :cookiesPerHourTemp=Tokyo.cookiesPerHour;break;
        case "Dubai" : cookiesPerHourTemp=Dubai.cookiesPerHour;break;
        case "Paris" : cookiesPerHourTemp=Paris.cookiesPerHour;break;
        case "Lima" : cookiesPerHourTemp=Lima.cookiesPerHour;break;
    }
    var sectionElement = document.createElement('section');
    body.appendChild(sectionElement);
    var ulElement=document.createElement('ul');
    sectionElement.appendChild(ulElement);
    var h3element =document.createElement('h3');
    ulElement.appendChild(h3element);
    h3element.textContent=location ;

    for (var j=0; j<hours.length; j++){
        var liElement =document.createElement('li');
        
        ulElement.appendChild(liElement);
        if(j<6){
            liElement.textContent=hours[j]+" am : " +cookiesPerHourTemp[j] +" cookies";
        }
        else{
            liElement.textContent=hours[j]+" pm : " +cookiesPerHourTemp[j] +" cookies";
        }
        totalCookies+=cookiesPerHourTemp[j];
    }
    var liTotalElement =document.createElement('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent="Total "+ totalCookies +" cookies";

}
var locations=["Seattle","Tokyo","Dubai","Paris","Lima"];
for(var i=0 ;i<locations.length ; i++){
    printEachLocation(locations[i]);
}
