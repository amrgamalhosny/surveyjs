import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";

export function applySettings(){
    


    SurveyCreator.SurveyNestedPropertyEditorItem.dragIconName = "icon-custom-drag";
    SurveyCreator.SurveyNestedPropertyEditorItem.deleteIconName = "icon-custom-delete";

    Survey.settings.allowShowEmptyTitleInDesignMode = false;

    // Color customization
    var mainColor = "#0078d4";
    var mainHoverColor = "#60C5FB";
    var textColor = "#5e5e5e";
    var headerColor = "#000000";
    var headerBackgroundColor = "#c880ff";
    var bodyContainerBackgroundColor = "#C0C0C0";

    var defaultThemeColorsSurvey = Survey.StylesManager.ThemeColors["default"];
    defaultThemeColorsSurvey["$main-color"] = mainColor;
    defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
    defaultThemeColorsSurvey["$text-color"] = textColor;
    defaultThemeColorsSurvey["$header-color"] = headerColor;
    defaultThemeColorsSurvey["$header-background-color"] = headerBackgroundColor;
    defaultThemeColorsSurvey["$body-container-background-color"] = bodyContainerBackgroundColor;

    var defaultThemeColorsEditor = SurveyCreator.StylesManager.ThemeColors["default"];
    defaultThemeColorsEditor["$primary-color"] = mainColor;
    defaultThemeColorsEditor["$secondary-color"] = mainColor;
    defaultThemeColorsEditor["$primary-hover-color"] = mainHoverColor;
    defaultThemeColorsEditor["$primary-text-color"] = textColor;
    defaultThemeColorsEditor["$selection-border-color"] = mainColor;


    // SurveyCreator.StylesManager.applyTheme("bootstrap");

    Survey.StylesManager.applyTheme();
    SurveyCreator.StylesManager.applyTheme();

    // Hide some properties of the itemvalue object
    // Design itemvalue[] property editor
    // Hide visbileIf, enableIf and text properties
    // Survey
    //     .Serializer
    //     .findProperty("itemvalue", "visibleIf")
    //     .visible = false;
    Survey.Serializer.addProperty("page", {
        name: "backgroundColor:text",
        category: "general"
    });

    // Survey
    //     .Serializer
    //     .findProperty("itemvalue", "enableIf")
    //     .visible = false;
    // Survey
    //     .Serializer
    //     .findProperty("itemvalue", "text")
    //     .visible = false;
    // Make the detail editor for itemvalue invisible, hide Edit button
    // SurveyCreator
    //     .SurveyQuestionEditorDefinition
    //     .definition["itemvalue[]@choices"]
    //     .tabs = [
    //         {
    //             name: "general",
    //             visible: false
    //         }
    //     ];

    

    //Remove default properties layout in property grid and have only one "general" category.
    //SurveyCreator.SurveyQuestionEditorDefinition.definition = {};

    

    // Add title for the sidebar panel
    // var rightContainerElement = document.getElementsByClassName("svd-designer-container--right-side")[0];
    // var titleDiv = document.createElement("div");
    // titleDiv.className = "svd-sidebar-title";
    // titleDiv.innerText = "Questions";
    // rightContainerElement.insertBefore(titleDiv, rightContainerElement.children[1]);
}


export function applyCreatorLandingPageSettings(creator: any){
    var landingToolboxBlackListItems = [
        "number",
        "phone",
        "textwithbutton",
        "address",
        "barrating"
    ];
    landingToolboxBlackListItems.forEach(item=> creator.toolbox.removeItem(item));
}

export function applyCreatorGeneralSettings(creator: any){

    // Show Designer, Test Survey, JSON Editor and additionaly Logic tabs
    // Show chosen question types in toolbox
    // Set single page mode
    // Show question title in the expression builder instead of question name
    // Do not allow to edit expression as text, use expression builder only
   
    // Create the SurveyJS Creator and render it in div with id equals to "creatorElement"
    //window['creator'] = new SurveyCreator.SurveyCreator("surveyCreatorContainer", options);
    //creator.options = options;
    // Show toolbox in the right container. It is shown on the left by default
    creator .showToolbox = "left";
    // Show property grid in the right container, combined with toolbox
    creator .showPropertyGrid = "right";
    // Make toolbox active by default
    creator.rightContainerActiveItem("toolbox");

    //Define visibleIndex for properties we want to show and set attribute that marks we want to show this property
    var maxVisibleIndex = 0;
    function showTheProperty(className, propertyName, visibleIndex) {
        console.log(propertyName);
        if (!visibleIndex) 
            visibleIndex = ++maxVisibleIndex;
        else {
            if (visibleIndex > maxVisibleIndex) 
                maxVisibleIndex = visibleIndex;
            }
        //Use Survey Serializer to find the property, it looks for property in the class and all it's parents
        var property = Survey
            .Serializer
            .findProperty(className, propertyName)
        if (!property) 
            return;
        property.visibleIndex = visibleIndex;
        //Custom JavaScript attribute that we will use in onShowingProperty event
        property.showProperty = true;
    }

    //   showTheProperty("question", "name");
    //  showTheProperty("question", "title");
    //  showTheProperty("question", "description");
    //  this.showTheProperty("question", "visible");
    //  this.showTheProperty("question", "required");
    //   showTheProperty("checkbox", "choices");
    //  this.showTheProperty("checkbox", "hasOther");
    //  this.showTheProperty("checkbox", "hasSelectAll");
    //  this.showTheProperty("checkbox", "hasNone");
    //  this.showTheProperty("text", "inputType");
    //  this.showTheProperty("text", "placeHolder");
    //  this.showTheProperty("comment", "placeHolder");
    //  this.showTheProperty("comment", "rows");

    var whitePropertyList = [
        "name",
        "title",
        "description",
        "visible",
        "isRequired",
        "choices",
        "hasOther",
        "hasSelectAll",
        "hasNone",
        "placeHolder",
        "rows",
        "inputType"
    ];

    //Use it to show properties that has our showProperty custom attribute equals to true
    // creator
    //     .onShowingProperty
    //     .add(function (sender, options) {
    //         options.canShow = options.property.showProperty === true;
    //     });

    // Remove toolbar items except undo/redo buttons
    // creator
    //     .toolbarItems
    //     .splice(2, 5);
    // Set custom designer placeholder
    //creator.placeholderHtml = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">' + '<img src="/Content/Images/examples/drag-image.svg" />' + '<div style="font-size: 16px; max-width: 210px;">' + 'Drag and drop a question to start designing your form' + '</div>' + '</div>';

    // Adorners for item inplace editing edit itemvalue.value and not itemvalue.text
    creator.inplaceEditForValues = true;
    // Hide Fast Entry option for ItemValue[] editor
    creator  
        .onSetPropertyEditorOptions
        .add(function (sender, options) {
            options.editorOptions.showTextView = false;
        });

}

export const options = {
    showDesignerTab:true,
    showLogicTab: false,
    showEmbededSurveyTab:false,
    showInvisibleElementsInTestSurveyTab :false,
    showJSONEditorTab :false,
    showTestSurveyTab:false,
    questionTypes: [
        "text",
        "checkbox",
        "radiogroup",
        "dropdown",
        "comment",
        "rating",
        "imagepicker",
        "boolean",
        "html",
        "file",
        "expression"
    ],
    //pageEditMode: "single",
    showTitlesInExpressions: true,
    allowEditExpressionsInTextEditor: false,
    showSurveyTitle: "always",

    
};

export const landingOptions = {
    showDesignerTab:true,
    showLogicTab: false,
    showEmbededSurveyTab:false,
    showInvisibleElementsInTestSurveyTab :false,
    showJSONEditorTab :false,
    showTestSurveyTab:false,
    
    questionTypes: [
        "text",
        "checkbox",
        "imagepicker",
        "html",
    ],
    pageEditMode: "single",
    showTitlesInExpressions: true,
    allowEditExpressionsInTextEditor: false,
    showSurveyTitle: "always"
};

export const treanslationOptions = {
    showTranslationTab: true,
    showDesignerTab:true,
    showLogicTab: false,
    showEmbededSurveyTab:false,
    showInvisibleElementsInTestSurveyTab :false,
    showJSONEditorTab :false,
    showTestSurveyTab:false
};