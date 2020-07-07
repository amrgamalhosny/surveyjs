import { BrowserTestingModule } from '@angular/platform-browser/testing';

export function TextWithButtonWidget(Survey : any){
    var widget = {
        name: 'textwithbutton',
        title: 'Text With Button',
        iconName: '',
        widgetIsLoaded: function(){
            return true;
        },
        isFit: function(question){
            return question.getType() === "textwithbutton";
        },
        activatedByChanged: function (activatedBy){
            Survey.JsonObject.metaData.addClass("textwithbutton", [], null, "text");
            Survey.JsonObject.metaData.addProperties("textwithbutton",[
                {name:"buttonText", default:"Click Me"}
            ]);
        }, 
        isDefaultRender: false,
        htmlTemplate: "<div><input/><button></button><div>",
        afterRender: function(question, el){
            var text = el.getElementsByTagName("input")[0];
            text.inputType = question.inputType;
            text.placeHolder = question.placeHolder;


            var button = el.getElementsByTagName('button')[0];
            button.innerHTML = button.buttonText;
            button.onclick = function(){
                question.value =  "You have clicked me";
            }

            text.onchange = function(){
                question.value = text.value;
            }

            var onValueChangedCallback = function () {
                text.value = question.value ? question.value : "";
            };

            var onReadOnlyChangedCallback = function () {
                if (question.isReadOnly) {
                  text.setAttribute("disabled", "disabled");
                  button.setAttribute("disabled", "disabled");
                } else {
                  text.removeAttribute("disabled");
                  button.removeAttribute("disabled");
                }
            };

            question.readOnlyChangedCallback = onReadOnlyChangedCallback;
            question.valueChangedCallback = onValueChangedCallback;
        },

        willUnmount: function(){}
    }

  //Register our widget in singleton custom widget collection
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}