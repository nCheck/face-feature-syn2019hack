var mongoose = require('mongoose');
var Schema = mongoose.Schema


var custSchema = new Schema({
    
    'folder_name': String,
    'image_name': String,
    'Arched_Eyebrows': 0,
    'Attractive': 0,
    'Bags_Under_Eyes': 0,
    'Bald': Number,
    'Bangs': Number,
    'Big_Lips': Number,
    'Big_Nose': Number,
    'Black_Hair': Number,
    'Blond_Hair': Number,
    'Blurry': Number,
    'Brown_Hair': Number,
    'Bushy_Eyebrows': Number,
    'Chubby': Number,
    'Double_Chin': 0,
    'Goatee': Number,
    'Gray_Hair': Number,
    'High_Cheekbones': Number,
    'Male': Number,
    'Mouth_Slightly_Open': Number,
    'Mustache': Number,
    'Narrow_Eyes': Number,
    'No_Beard': Number,
    'Oval_Face': Number,
    'Pale_Skin': Number,
    'Pointy_Nose': Number,
    'Receding_Hairline': Number,
    'Rosy_Cheeks': Number,
    'Sideburns': Number,
    'Smiling': Number,
    'Straight_Hair': Number,
    'Wavy_Hair': Number,
    'Wearing_Earrings': Number,
    'Young': Number

});




module.exports = mongoose.model('Celeb' , custSchema);