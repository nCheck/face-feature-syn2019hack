var limdu = require('limdu');


var MyWinnow = limdu.classifiers.Winnow.bind(0, {retrain_count: 10});

var intentClassifier = new limdu.classifiers.multilabel.BinaryRelevance({
	binaryClassifierType: MyWinnow
});

intentClassifier.trainBatch([
	{input: {'guy':1,'man':1,'male':1}, output: "Male"},
	{input: {'arched eyebrow':1}, output: "Arched_Eyebrows"},
    {input: {'bag':2, 'under':2 ,'the':1, 'eyes':1,'sleepy':2, 'eyes':1,'drunk eyes':1},output:"Bag_Under_Eyes"},
    {input: {'bald':1,'hairless':1,'shaved':1,'clean':1,'old':1}, output: "Bald"},
    {input: {'bangs':1,'fringe':1}, output: "Bangs"},
    {input: {'big lips':1,'huge':1, 'lips':1,'fat lips':1}, output: "Big Lips"},
    {input: {'black hair':1,'dark' :1,'hair':1}, output: "Black Hair"},
    {input: {'large nose':1,'big':1 ,'nose':1,'fat nose':1}, output: "Big Nose"},
    {input: {'yellow hair':1,'golden ':2,'hair':1,'blonde':1,'blond':1,}, output: "Blond_Hair"},
    {input: {'brown_hair':1,'brunette':1}, output: "Brown  Hair"},
    
	]);

console.dir(intentClassifier.classify({I:1,saw:1,an:1,old:1,dark:1,hair:1,big:1}));  // ['APPLE','BANANA']
console.log(intentClassifier.classify({I:1,want:1,an:1,apple:1,and:1,a:1,banana:1}))

var MyWinnow = limdu.classifiers.Winnow.bind(0, {retrain_count: 10});

var intentClassifier = new limdu.classifiers.multilabel.BinaryRelevance({
	binaryClassifierType: MyWinnow
});



s=['Arched_Eyebrows', 'Attractive', 'Bags_Under_Eyes',
       'Bald', 'Bangs', 'Big_Lips', 'Big_Nose', 'Black_Hair', 'Blond_Hair',
       'Blurry', 'Brown_Hair', 'Bushy_Eyebrows', 'Chubby', 'Double_Chin', 'Goatee', 'Gray_Hair', 'High_Cheekbones',
       'Male', 'Mouth_Slightly_Open', 'Mustache', 'Narrow_Eyes', 'No_Beard',
       'Oval_Face', 'Pale_Skin', 'Pointy_Nose', 'Receding_Hairline',
       'Rosy_Cheeks', 'Sideburns', 'Smiling', 'Straight_Hair', 'Wavy_Hair',
       'Wearing_Earrings', 'Young']

attrDict = {'Arched_Eyebrows':0, 'Attractive':0, 'Bags_Under_Eyes':0,
'Bald':0, 'Bangs':0, 'Big_Lips':0, 'Big_Nose':0, 'Black_Hair':0, 'Blond_Hair':0,
'Brown_Hair':0, 'Bushy_Eyebrows':0, 'Chubby':0, 'Double_Chin':0, 'Goatee':0, 'Gray_Hair':0, 
'High_Cheekbones':0,'Mouth_Slightly_Open':0, 'Mustache':0, 'Narrow_Eyes':0, 'No_Beard':0,
'Oval_Face':0, 'Pale_Skin':0, 'Pointy_Nose':0, 'Receding_Hairline':0,
'Rosy_Cheeks':0, 'Sideburns':0, 'Smiling':0, 'Straight_Hair':0, 'Wavy_Hair':0,
'Wearing_Earrings':0, 'Young':0}

// male= [ 'guy':1,'man':1,'male':1]
// Arched_Eyebrows=['arched eyebrow':1]
// Attractive=['good looking':1,'well groomed':1,'handsome':1,'beautiful':1,'charming':1]
// Bags_Under_Eyes=[ 'bag under the eyes':1,'sleepy eyes':1,'drunk eyes':1]
// Bald=['bald':1,'hairless':1,'shaved':1,'clean':1]
// Bangs=['bangs':1,'fringe':1]
// Big_Lips=['big lips':1,'huge lips':1,'fat lips':1]
// Black Hair=['black hair':1,'dark hair':1]
// Big nose=['large nose':1,'big nose':1,'fat nose':1]
// Blond_Hair=['yellow hair':1,'golden hair':1,'blonde hair':1,'blond':1,'brownish yellow':1]
// Brown_Hair=['brown_hair':1,'brunette':1]
// Bushy_Eyebrows=['thick eyebrows':1,'bushy eyebrows':1,'overgrown eyerows':1,'large eyebrows':1,'ugly eyebrows':1]
// Chubby=['fat':1,'chubby':1,'thick':1,'chunky':1,'plump':1]
// Double_Chin=['turkey chin':1,'fat chin':1,'double chin':1,'saggy chin':1]
// Goatee=['beard':1,'goatee':1,'stubble':1,'facial hair':1]
// Gray_Hair=['silver hair':1,'grey hair':1,'gray-haired':1]
// High_Cheekbones=['high cheekbones':1,'sharp cheekbones':1]
// Mouth_Slightly_Open=['open mouth':1,'mouth slightly open':1]
// Mustache=['moustache':1,'mustache':1]
// Narrow_Eyes=['small eyes':1,'lean eyes':1]
// No_Beard=['clean shaved':1,'smooth skin':1,'no facial hair':1]
// Oval_Face=['oval face':1]
// Pale_Skin=['white skin':1,'pale skin':1,'bleached skin':1]
// Pointy_Nose=['sharp nose':1,'pointy nose':1]
// Receding Hairline=['less hair':1,'almost bald':1]
// Young = ['kid' :1,'teen' :1,'learner' :1,'in his mids':1]
// Wearing_Earrings = ['earings':1,'piercings':1]
// Wavy_Hair = [ 'curly' :1,'wavy hair' :1,'wavy' :1,'curl' :1,'twisted' :1,'spiral':1]
// Straight_Hair = [ 'straight' :1,'linear' :1,'recti linear':1]
// Smiling = [ 'smile' :1,'happy' :1,'cheerful' :1,'blush':1]
// Sideburns = [ 'hairs at side' :1,'side hairs' :1,' beard ':1]
// Rosy_Cheeks = [ 'red cheeks' :1,'pinky cheeks'  :1,'lovely cheeks' :1,'blush':1]

male= [ 'guy','man','male','he']
Arched_Eyebrows=['arched eyebrow']
Attractive=['good looking','well groomed','handsome','beautiful','charming']
Bags_Under_Eyes=[ 'bag under the eyes','sleepy eyes','drunk eyes']
Bald=['bald','hairless','shaved','clean']
Bangs=['bangs','fringe']
Big_Lips=['big lips','huge lips','fat lips']
Black_Hair=['black hair','dark hair']
Big_Nose=['large nose','big nose','fat nose']
Blond_Hair=['yellow hair','golden hair','blonde hair','blond','brownish yellow']
Brown_Hair=['brown_hair','brunette']
Bushy_Eyebrows=['thick eyebrows','bushy eyebrows','overgrown eyerows','large eyebrows','ugly eyebrows']
Chubby=['fat','chubby','thick','chunky','plump']
Double_Chin=['turkey chin','fat chin','double chin','saggy chin']
Goatee=['beard','goatee','stubble','facial hair']
Gray_Hair=['silver hair','grey hair','gray-haired']
High_Cheekbones=['high cheekbones','sharp cheekbones']
Mouth_Slightly_Open=['open mouth','mouth slightly open']
Mustache=['moustache','mustache']
Narrow_Eyes=['small eyes','lean eyes']
No_Beard=['clean shaved','smooth skin','no facial hair']
Oval_Face=['oval face']
Pale_Skin=['white skin','pale skin','bleached skin']
Pointy_Nose=['sharp nose','pointy nose']
Receding_Hairline=['less hair','almost bald']
Young = ['kid' ,'teen' ,'learner' ,'in his mids','boy','girl']
Wearing_Earrings = ['earings','piercings']
Wavy_Hair = [ 'curly' ,'wavy hair' ,'wavy' ,'curl' ,'twisted' ,'spiral']
Straight_Hair = [ 'straight' ,'linear' ,'recti linear']
Smiling = [ 'smile' ,'happy' ,'cheerful' ,'blush']
Sideburns = [ 'hairs at side' ,'side hairs' ,' beard ']
Rosy_Cheeks = [ 'red cheeks' ,'pinky cheeks'  ,'lovely cheeks' ,'blush']

// txt = 'He is around 45 and has a  beard'




module.exports.getNlp = (txt) =>{

    sply = txt.toLowerCase().split(" ")

    for (i of sply){
        console.log(i)
        if (!isNaN(i)){
            console.log('akfb0  ',i)
            x = parseInt(i)
            if(x<40){
                attrDict["Young"]=1
            }
            
        }
        else if ( male.includes(i) ){
            attrDict['male'] = 1
        }
        else if(Arched_Eyebrows.includes(i)){
            attrDict["Arched_Eyebrows"]=1
        }
        else if(Attractive.includes(i)){
            attrDict["Attractive"]=1
        }
        else if(Bags_Under_Eyes.includes(i)){
            attrDict["Bags_Under_Eyes"]=1
        }
        else if(Bald.includes(i)){
            attrDict["Bald"]=1
        }else if(Bangs.includes(i)){
            attrDict["Bangs"]=1
        }else if(Big_Lips.includes(i)){
            attrDict["Big_Lips"]=1
        }else if(Black_Hair.includes(i)){
            attrDict["Black_Hair"]=1
        }else if(Big_Nose.includes(i)){
            attrDict["Big_Nose"]=1
        }else if(Brown_Hair.includes(i)){
            attrDict["Brown_Hair"]=1
        }else if(Blond_Hair.includes(i)){
            attrDict["Blond_Hair"]=1
        }else if(Arched_Eyebrows.includes(i)){
            attrDict["Bushy_Eyebrows"]=1
        }else if(Chubby.includes(i)){
            attrDict["Chubby"]=1
        }else if(Double_Chin.includes(i)){
            attrDict["Double_Chin"]=1
        }else if(Goatee.includes(i)){
            attrDict["Goatee"]=1
        }else if(Gray_Hair.includes(i)){
            attrDict["Gray_Hair"]=1
        }else if(High_Cheekbones.includes(i)){
            attrDict["High_Cheekbones"]=1
        }else if(Mouth_Slightly_Open.includes(i)){
            attrDict["Mouth_Slightly_Open"]=1
        }else if(Mustache.includes(i)){
            attrDict["Mustache"]=1
        }else if(Narrow_Eyes.includes(i)){
            attrDict["Narrow_Eyes"]=1
        }else if(No_Beard.includes(i)){
            attrDict["No_Beard"]=1
        }else if(Oval_Face.includes(i)){
            attrDict["Oval_Face"]=1
        }else if(Pale_Skin.includes(i)){
            attrDict["Pale_Skin"]=1
        }else if(Pointy_Nose.includes(i)){
            attrDict["Pointy_Nose"]=1
        }else if(Receding_Hairline.includes(i)){
            attrDict["Receding_Hairline"]=1
        }else if(Young.includes(i)){
            attrDict["Young"]=1
        }else if(Wearing_Earrings.includes(i)){
            attrDict["Wearing_Earrings"]=1
        }else if(Wavy_Hair.includes(i)){
            attrDict["Wavy_Hair"]=1
        }else if(Straight_Hair.includes(i)){
            attrDict["Straight_Hair"]=1
        }else if(Smiling.includes(i)){
            attrDict["Smiling"]=1
        }else if(Sideburns.includes(i)){
            attrDict["Sideburns"]=1
        }else if(Rosy_Cheeks.includes(i)){
            attrDict["Rosy_Cheeks"]=1
        }
    }
    
    newDict={}
    
    for(var key in attrDict) {
        
        if(attrDict[key] > 0){
            newDict[key] = attrDict[key]
        }
    
        if(attrDict['male'] == 0){
            newDict['male'] = 0
        }
    
        if(attrDict['Young'] == 0){
            newDict['Young'] = 0
        }
        
    // do something with "key" and "value" variables
    }
      
    
    
    
    return newDict


}