// All world
var maskList = $.masksSort($.masksLoad("/js/vendor/inputmask/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
var maskOpts = {
	inputmask: {
		definitions: {
			'#': {
				validator: "[0-9]",
				cardinality: 1
			}
		},
		//clearIncomplete: true,
		showMaskOnHover: false,
		autoUnmask: true
	},
	match: /[0-9]/,
	replace: '#',
	list: maskList,
	listKey: "mask",
	onMaskChange: function(maskObj, determined) {
		var tipBlock = $(this).parent().find('[data-input="phone-tip"]');
		
		if (determined) {
			var hint = maskObj.name_ru;
			if (maskObj.desc_ru && maskObj.desc_ru != "") {
				hint += " (" + maskObj.desc_ru + ")";
			}
			tipBlock.html(hint);
		} else {
			tipBlock.html("Введите телефон");
		}
		$(this).attr("placeholder", $(this).inputmask("getemptymask"));
	}
};

var listRU = $.masksSort($.masksLoad("/js/vendor/inputmask/phones-ru.json"), ['#'], /[0-9]|#/, "mask");
var optsRU = {
	inputmask: {
		definitions: {
			'#': {
				validator: "[0-9]",
				cardinality: 1
			}
		},
		//clearIncomplete: true,
		showMaskOnHover: false,
		autoUnmask: true
	},
	match: /[0-9]/,
	replace: '#',
	list: listRU,
	listKey: "mask",
	onMaskChange: function(maskObj, determined) {
		
		var tipBlock = $(this).parent().find('[data-input="phone-tip"]');
		
		if (determined) {
			if (maskObj.type != "mobile") {
				tipBlock.html(maskObj.city.toString() + " (" + maskObj.region.toString() + ")");
			} else {
				tipBlock.html("Мобильный");
			}
		} else {
			tipBlock.html("Введите телефон");
		}
		$(this).attr("placeholder", $(this).inputmask("getemptymask"));
	}
};

//Initial
//$('#inputmask_phone').inputmasks(optsRU);
//$('#phone_mask').change();
