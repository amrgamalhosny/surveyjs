export function NumberComponent(Survey : any){
    var component = {
        name: 'number',
        title: 'Number',
        questionJSON:{
            type:'text',
            inputType:'number'
        },
        onInit() {
            //SurveyJS will create a new class "number". We can add properties for this class onInit()
            Survey.Serializer.addProperty("number", {
                name: "min:number",
                default: false,
                category: "general",
            });

            Survey.Serializer.addProperty("number", {
                name: "max:number",
                default: false,
                category: "general",
                });
        },
        onPropertyChanged(question, propertyName, newValue) {
            question.contentQuestion.max = question.max;
            question.contentQuestion.min = question.min;
        },
        
    };
    Survey.ComponentCollection.Instance.add(component);
}