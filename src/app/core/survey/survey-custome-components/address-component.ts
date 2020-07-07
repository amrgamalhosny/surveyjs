export function AddressComponent(Survey : any){
    var component = {
        name: 'address',
        title: 'Address',
        elementsJSON:[
            {type:'text', name:'streetAddress', tiitle:'Street Address', isRequired:true},
            {type:'text', name:'streetLine2', tiitle:'Street Line2', isRequired:true},
            {type:'text', name:'city', tiitle:'Street Address', isRequired:false},
            {type:'text', name:'state', tiitle:'State / Province / Region', isRequired:false, startWithNewLine:false},
            {type:'text', name:'zipCode', tiitle:'Postal / Zip Code', isRequired:false},
            {type:'dropdown', name:'country', tiitle:'Country', isRequired:false, optionsCaption:"Select a country ..." , choicesByUrl:{url: "https://restcountries.eu/rest/v2/all", }, startWithNewLine:false},

        ]
    };
    Survey.ComponentCollection.Instance.add(component);
}