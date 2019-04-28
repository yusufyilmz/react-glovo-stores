import { arrayUnique } from './arrayHelper';
import { storeStateHelper } from './storeStateHelper';


const getStoresWithType = (categories, type) => {

    const selectedCategory = categories.find(x => x.name === type)

    if (selectedCategory.stores) {
        selectedCategory.stores.sort((x, y) => y.open - x.open)
        return storeStateHelper.getStoreStates(selectedCategory.stores)
    }
}


const getStoresWithTag = (store, tag) => {

    var tagList = tag.toLowerCase().split(' ')
    var foundStores = [];

    //search every tag in stores
    tagList.forEach(t => {
        var tagFoundStores = store.stores.filter(store => store.tags.find(currentTag => currentTag.toLowerCase() === t));
        if (tagFoundStores && tagFoundStores.length > 0) {
            foundStores = [...foundStores, ...tagFoundStores]
        }
    })

    if (foundStores.length > 0) {
        foundStores.sort((x, y) => y.open - x.open)
        return arrayUnique(foundStores);
    }

}


export const storeHelper = {
    getStoresWithType,
    getStoresWithTag
}