sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "org/indexit/zsdsalesprocess/model/formatter"
], (Controller, JSONModel, MessageBox,formatter) => {
    "use strict";

    return Controller.extend("org.indexit.zsdsalesprocess.controller.sales", {
         formatter: formatter,
         onInit() {

            var student0 = {
                "StudentID": "Kumar",
                "SudentEdu": "Mtech",
                "SudentStream": "Sci",
            };
            var student1 = {
                "StudentID": "Chaitnaya",
                "SudentEdu": "Btech",
                "SudentStream": "Computur Sci",
            };
            var student2 = {
                "StudentID": "Sathish",
                "SudentEdu": "Phd",
                "SudentStream": "Phy",
            };
            var studArray = ["Kumar", "Sathish", "Chaitanya"];

            var studentInfo = [student0, student1, student2];

            var items = [0, 1, 2, 3, 4]

            var studentInfo = [{
                "StudentID": "Kumar",
                "SudentEdu": "Mtech",
                "SudentStream": "Sci",
            }, {
                "StudentID": "Chaitnaya",
                "SudentEdu": "Btech",
                "SudentStream": "Computur Sci",
            }, {
                "StudentID": "Sathish",
                "SudentEdu": "Phd",
                "SudentStream": "Phy",
            }]

            let salesinfo = [{
                VBELN: "5001",
                POSNR: "0010",
                MATNR: "2323",
                NETPR: "100.00",
                BUKRS: "1000",
                STKAVAIL: "NA",
                DATUM:"2026-08-24",
            }, {
                VBELN: "5002",
                POSNR: "0010",
                MATNR: "2424",
                NETPR: "101.00",
                BUKRS: "1001",
                STKAVAIL: "A",
                DATUM:"08/24/2026",
            },
            {
                VBELN: "5003",
                POSNR: "0010",
                MATNR: "2424",
                NETPR: "101.00",
                BUKRS: "1001",
                STKAVAIL: "A",
                DATUM:"24.08.2026",
            },
            {
                VBELN: "5004",
                POSNR: "0010",
                MATNR: "2424",
                NETPR: "101.00",
                BUKRS: "1001",
                STKAVAIL: "A",
                DATUM:"August 24, 2026",
            },
            {
                VBELN: "5005",
                POSNR: "0010",
                MATNR: "2424",
                NETPR: "101.00",
                BUKRS: "1001",
                STKAVAIL: "A",
                DATUM:"24 August 2026",
            },
        {
                VBELN: "5006",
                POSNR: "0010",
                MATNR: "2525",
                NETPR: "101.00",
                BUKRS: "1001",
                STKAVAIL: "A",
                DATUM:"24-Aug-2026",
            },
        {
                VBELN: "5007",
                POSNR: "0010",
                MATNR: "2525",
                NETPR: "101.00",
                BUKRS: "1001",
                STKAVAIL: "A",
                DATUM:"Monday, August 24, 2026",
            },
             {
                VBELN: "5008",
                POSNR: "0010",
                MATNR: "2525",
                NETPR: "101.00",
                BUKRS: "1001",
                STKAVAIL: "A",
                DATUM:"20260824",
            },
        ];


            var oModel = new JSONModel(salesinfo);
            this.getView().setModel(oModel, "SalesModel");
            var datalength = this.getView().getModel("SalesModel").getData().length;
            // for (let i = 0; i <= datalength; i++) {
            //     console.log(this.getView().getModel("SalesModel").getData()[i].NETPR);
            // }
            for (let i = 0; i < datalength; i++) {
                var netPrice = parseFloat(oModel.getProperty("/" + i + "/NETPR"));
                var discountRate = netPrice > 100 ? 0.10 : 0.05;
                            //     oModel.getProperty("/" + i + "/NETPR")>100 ? 0.10 : 0.05;
                            //    oModel.getProperty("/" + i + "/NETPR")>100 ? sap.ui.core.ValueState.Error : sap.ui.core.ValueState.Warning
                            //         {SalesModel>DISCOUNT} ?


                            
                var discountPrice = (netPrice - (netPrice * discountRate)).toFixed(2);

                oModel.setProperty("/" + i + "/DISCOUNT", discountPrice);
             //   var discountprop=oModel.getProperty("/" + i + "/DISCOUNT");


            }
            



        },
        // onExit(){},
        // onBeforeRendering(){},
        // OnAfterRendering(){},

        //onSearch:function(){},
        onSearch(oControlEvent) {
          ///No nooodddeeeeeee
          

        },
        onChange: function () { },
        onSubmitClick(oEvt) {
            // var oResourceModel= new sap.ui.model.resource.ResourceModel();
            var oResourceModel = this.getView().getModel("i18n");
            //var btnTextE=oEvt.getSource().getProperty("text");
            var searchField = this.getView().byId("_IDGenSearchField").getProperty("value");
            //var btnTextV=this.getView().byId("iSave").setText("Edit");
            var currentText = this.getView().byId("iSave").getProperty("text");
            // MessageBox.show(searchField + "" + currentText);
            MessageBox.show(currentText, {
                icon: sap.m.MessageBox.Icon.ERROR,                    // default
                title: "Click Add",                                           // default
                actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.YES],                 // default
                emphasizedAction: sap.m.MessageBox.Action.OK,        // default
                onClose: null,                                       // default
                styleClass: "",                                      // default
                initialFocus: null,                                  // default
                textDirection: sap.ui.core.TextDirection.Inherit,    // default
                dependentOn: null                                    // default
            });


        }
    });
});