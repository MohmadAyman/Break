angular.module('expressNode').value('mvToastr',toastr);


toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

angular.module('expressNode').factory('mvNotify',function(mvToastr){
	return{
		notify: function(msg){
			mvToastr.success(msg);
			console.log(msg);
		}

	}
})
