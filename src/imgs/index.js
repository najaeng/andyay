function importAll(val) {
    let images = [{}];
    val.keys().map((item, index) => { images[item.substr(2, item.substr(2, item.length).indexOf('.'))] = val(item) });
    return images;
}
    
const images = importAll(require.context('./images', false, /\.(png|JPG|jpe?g|svg)$/));

export default images;
