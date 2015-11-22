(function() {
	"use strict";
	
	angular
		.module("productManagement")
		.controller("ProductEditCtrl",
					 ["product",
					  "$state",
					  ProductEditCtrl]);
					
	function ProductEditCtrl(product, $state){
		var vm = this;
		
		vm.product = product;
		
		
		if(vm.product && vm.product.productId){
			vm.title = "Edit: " + vm.product.productName;
		}
		else{
			vm.title = "New Product";
		}
		
		
		vm.open = function ($event){
			$event.preventDefault();
			$event.stopPropagation();
			
			vm.opened = !vm.opened;
		}
		
		vm.submit = function() 
		{
			vm.product.$save( function(date){
					toastr.success("Success");
				});
		}
		
		vm.cancel = function() {
			$state.go('productList');
		}
		
		vm.addTags = function (tags) {
			if(tags){
				var array = tags.split(',');
				vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
				// if(vm.product.tags.length != 0)
				// {
				// 	for(var i = 0; i<array.length; i++)
				// 	{
				// 		vm.product.tags.push(array[i]);
				// 	}
				// }
				// else
				// {
				// 	vm.product.tags = array;
				// }
				
				vm.newTags = "";
			}
			else{
				alert("Please enter one or more tags separeted by commas");
			}
		}
		
		vm.removeTag = function (idx) {
			vm.product.tags.splice(idx,1);
		}
		
	}
}());