sap.ui.controller("zzorderform2.Display", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zzorderform2.Display
*/
onInit: function() {

	this.order = {
			orderno : "",
			itemno  : "",
			quantity :"",
			amount : "",
			currency : ""
			
	}
	
},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zzorderform2.Display
*/
onBeforeRendering: function() {

	var oModel = new sap.ui.model.json.JSONModel(this.order);
	this.getView().setModel(oModel);
	
},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zzorderform2.Display
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zzorderform2.Display
*/
//	onExit: function() {
//
//	}


handleSave : function(){
	
	this.getView().byId("idOrderData").setVisible(true);
},

handleReject : function(){
	
	this.order = {
			orderno : "",
			itemno  : "",
			quantity :"",
			amount : "",
			currency : "",
			
	}
	
	this.getView().getModel().setData(this.order);
	this.getView().byId("idOrderData").setVisible(false);
}



});