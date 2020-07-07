export function PhoneWidget(Survey : any){
    var widget = {
        name: 'phone',
        title: 'Phone',
        iconName: '',
        widgetIsLoaded: function(){
            return true;
        },
        isFit: function(question){
            return question.getType() === "phone";
        },
        activatedByChanged: function (activatedBy){
            Survey.JsonObject.metaData.addClass("phone", [], null, "text");
        }, 
        isDefaultRender: false,
        htmlTemplate:   `<div  class="input-group"><input type="tel" /><div>`,
        afterRender: function(question, el){
            var text = el.getElementsByTagName("input")[0];
            text.inputType = question.inputType;
            text.placeHolder = question.placeHolder;

            var intl = window['intlTelInput'](text,{
                initialCountry: "sa",
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
           });
            text.onchange = function(){
                question.value = intl.getNumber();
            }

            var onValueChangedCallback = function () {
                text.value = question.value ? question.value : "";
            };

            var onReadOnlyChangedCallback = function () {
                if (question.isReadOnly) {
                  text.setAttribute("disabled", "disabled");
                } else {
                  text.removeAttribute("disabled");
                }
            };

            question.readOnlyChangedCallback = onReadOnlyChangedCallback;
            question.valueChangedCallback = onValueChangedCallback;
        },

        willUnmount: function(){}
    }

    // function phoneNumbervalidator(){

    // }
    // Survey.FunctionFactory.Instance.register("phoneNumbervalidator", phoneNumbervalidator);

  //Register our widget in singleton custom widget collection
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}