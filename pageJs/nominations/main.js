setupPage();
function setupPage(){
    var nomCtrlDiv = document.getElementsByClassName("nominations-controller")[0];
    nomCtrl = angular.element(nomCtrlDiv).scope().nomCtrl;
    if (nomCtrl == undefined){
        //Retry until page is loaded far enough to grab nomination controller
        setTimeout(setupPage, 100);
    }else{
        console.log("[WayFarer+] Hooked NominationsController to nomCtrl");
        
        var modEvent = new Event("WFPNomCtrlHooked");
        document.dispatchEvent(modEvent);
    }
};

function selectNomination(){
    var nomSelectEvent = new Event("WFPNomSelected");
    document.dispatchEvent(nomSelectEvent);
}

function addLatLngToTitle(){
    //Add lat long to page
    var locationTitle = document.getElementById("map").parentNode.children[0];
    locationTitle.innerText = "Location (" + nomCtrl.currentNomination.lat + ", " + nomCtrl.currentNomination.lng + "):";
}
document.addEventListener("WFPNomSelected", addLatLngToTitle, false);