/*global QUnit*/

sap.ui.define([
	"org/indexit/zsdsalesprocess/controller/sales.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sales Controller");

	QUnit.test("I should test the sales controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
