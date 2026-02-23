/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/nubexx/hr/pokemonfiori/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
