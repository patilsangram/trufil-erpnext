// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

{% include 'controllers/js/contact_address_common.js' %};
{% include 'erpnext/crm/crm_module_customization.js' %};

frappe.ui.form.on("Address", "validate", function(frm) {
	// clear linked customer / supplier / sales partner on saving...
	$.each(["Customer", "Supplier", "Sales Partner", "Lead"], function(i, doctype) {
		var name = frm.doc[doctype.toLowerCase().replace(/ /g, "_")];
		if(name && locals[doctype] && locals[doctype][name])
			frappe.model.remove_from_locals(doctype, name);
	});
});
