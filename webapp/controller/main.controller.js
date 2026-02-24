sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.nubexx.hr.pokemonfiori.controller.main", {
            onInit: function () {
                //let oJsonModel = new sap.ui.model.json.JSONModel();
                //oJsonModel.setProperty("/propiedad1", "1"); // el 1 es el valor
                //this.getView().setModel(oJsonModel, "modelo1");
            },

            onPress: function (oEvent) {
                var buttonPressed = oEvent.getSource();
                var id = buttonPressed.getId();
                var language = this.getView().getModel("i18n").getResourceBundle();

                var a = parseFloat(this.byId("input-a").getValue());
                var b = parseFloat(this.byId("input-b").getValue());

                if (isNaN(a) || isNaN(b)) {
                    var errorText = language.getText("invalidDigits");

                    sap.m.MessageToast.show(errorText);
                    return;
                }

                var resultNumber;

                if (id.includes("sumButton")) {
                    resultNumber = a + b;
                } else if (id.includes("subButton")) {
                    resultNumber = a - b;
                } else if (id.includes("multButton")) {
                    resultNumber = a * b;
                }

                var resultText = language.getText("resultText")
                sap.m.MessageToast.show(resultText + resultNumber);

            }
        });
    });
