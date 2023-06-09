function introduction (name){
    return `Hi, my name is ${name}.`
}
introduction("AKi");
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Aki","javascript");

function introductionWithLanguageOptional(name, language ="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Gracie");
