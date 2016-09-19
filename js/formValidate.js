/* Developed by Sivakumar S Nair */

(function($) {

    $.fn.formValidate = function(options){

        // Default Settings
        var __this = this;
        var settings = $.extend({

            attribute               : 'formValidate',
            defaultErrorClass       : "error",
            defaultValidClass       : "valid",   
            trigger                 : 'blur', /* possible values blur and focus */
            scroll                  : true,
            hideErrorOnChange       : true,
            assyncPattern           : "",
            ajax                    : false,
            defaultMessage          : "This field is required.",
            defaultEmailMessage     : "Please enter a valid email address.",
            defaultNumberMessage    : "Please enter a valid number.",
            defaultUrlMessage       : "Please enter a valid URL",
            successMessage          : true,
            defaultSuccessMessage   : "Valid field"
            
        }, options);

        var validate = function(element){

            //Whole Form Validation
            if(__this.is('[data-'+settings.attribute+']')){
                $(element).removeClass(settings.defaultValidClass).addClass(settings.defaultErrorClass);                        
                $(element).after('<span class="'+settings.defaultErrorClass+'">'+settings.defaultMessage+'</span>');
            }

            // Field Validation
            else {
                if($(element).is('[data-'+settings.attribute+']')){
                    if($(element).attr('data-'+settings.attribute)){
                        var rule = $(element).attr('data-'+settings.attribute);
                    }
                }
            }
        },

        validateOnSubmit = function(){
            $(__this).find('input, select, textarea').each(function(){
                validate(this); 
            });
        };

        __this.submit(function(e){
            validateOnSubmit();
            if(__this.find(".invalid")){
                e.preventDefault();
            }
                        
        });

    }

}(jQuery));






