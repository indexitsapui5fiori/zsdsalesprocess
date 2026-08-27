sap.ui.define([ "sap/ui/core/format/DateFormat"], function (DateFormat) {
    "use strict";
     // the OUTPUT format (what the user sees)
    var oOutputFormat = DateFormat.getDateInstance({ pattern: "dd MMMM yyyy" });

    // every INPUT format we expect to receive, in try-order
    var aInputPatterns = [
        "yyyy-MM-dd",              // 2026-08-24
        "MM/dd/yyyy",              // 08/24/2026
        "dd.MM.yyyy",              // 24.08.2026
        "MMMM d, yyyy",            // August 24, 2026
        "d MMMM yyyy",             // 24 August 2026
        "d-MMM-yyyy",              // 24-Aug-2026
        "EEEE, MMMM d, yyyy",      // Monday, August 24, 2026
        "yyyyMMdd"                 // 20260824
    ];


    return {
        // "A" = available -> full cart, anything else -> empty cart
        stockIcon: function (sStkAvail) {
            switch (sStkAvail) {
                case "A": return "sap-icon://cart-2";     // in stock
                case "NA": return "sap-icon://cart-3";     // out of stock
                default: return "sap-icon://question-mark"; // unknown
            }
        },
        // colour the stock button by availability
        stockState: function (sStkAvail) {
            return sStkAvail === "A" ? "Success" : "Error";
        },

        // ObjectStatus state driven by the discounted price
        discountState: function (sDiscount) {
            var fDiscount = parseFloat(sDiscount);
            if (isNaN(fDiscount)) {
                return "None";
            }
            return fDiscount >= 100 ? "Error" : "Success";
        },

        // NETPR -> "$100.00"
        formatPrice: function (sNetPrice) {
            var fPrice = parseFloat(sNetPrice);
            return isNaN(fPrice) ? "" : "$" + fPrice.toFixed(2);
        },
        discountPrice: function (sNetPrice) {
            var fNetPrice = parseFloat(sNetPrice);          // "101.00" -> 101
            if (isNaN(fNetPrice)) {                          // guard against bad/empty data
                return "";
            }
            var fRate = fNetPrice > 100 ? 0.10 : 0.05;       // your discount rule
            var fDiscount = fNetPrice - (fNetPrice * fRate); // subtract the discount
            return fDiscount.toFixed(2);                     // "90.90" (2 decimals, string)
        },
//         formatDate: function (sRaw) {
//     if (!sRaw) { return ""; }
//     var oDate = new Date(sRaw);
//     if (isNaN(oDate)) { return sRaw; }          // fallback: show as-is
//     // build a DateFormat instance for the OUTPUT pattern
//     var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
//         pattern: "dd MMMM yyyy"
//     });
//     return oDateFormat.format(oDate);           // -> "24 August 2026"
// }
// formatDate: function (sRaw) {
//             if (!sRaw) { return ""; }

//             // try each pattern until one parses successfully
//             for (var i = 0; i < aInputPatterns.length; i++) {
//                 var oParser = DateFormat.getDateInstance({ pattern: aInputPatterns[i] });
//                 var oDate = oParser.parse(sRaw);
//                 if (oDate) {                          // parse() returns null on failure
//                     return oOutputFormat.format(oDate);   // -> "24 August 2026"
//                 }
//             }
//             return sRaw;   // nothing matched — show original as a last resort
//         }
    };
});