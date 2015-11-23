
(function() {
	"use strict";
	
	angular
		.module("productManagement")
		.controller("ProductDetailCtrl",
					 ["product",
					  "productService",
					  ProductDetailCtrl]);
					
	function ProductDetailCtrl(product, productService){
		var vm = this;
		
		vm.product = product;
		
		vm.title = "Product Detail: " + vm.product.productName;
		
		vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);
		
		if(vm.product.tag){
			vm.product.tagList = vm.product.tags.toString();
		}
		
	}
}());