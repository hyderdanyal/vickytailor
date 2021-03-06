import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'
const initState = {
    items: [
        { id: 1, title: 'Simple Shirt', price: 600 },
        { id: 2, title: 'Simple Coat', price: 3000 },
        { id: 3, title: 'Waist Coat', price: 1000 },
        { id: 4, title: '2 Piece Suit', price: 3500 },
        { id: 5, title: '3 Piece Suit', price: 4500 },
        { id: 6, title: 'Tuxedo Suit', price: 4000 },
        { id: 7, title: 'Pathani', price: 1350 },
        { id: 8, title: 'Kurta Payjama', price: 1200 },
        { id: 9, title: 'Simple Kurti without Lining', price: 450 },
        { id: 10, title: 'Simple kurti with lining', price: 650 },
        { id: 11, title: 'Simple salwar suit without lining', price: 600 },
        { id: 12, title: 'Simple salwar suit with kurti lining', price: 850 },
        { id: 13, title: 'Simple salwar suit with full lining', price: 1200 },
        { id: 14, title: 'Simple pant suit without lining', price: 950 },
        { id: 15, title: 'Simple pant suit with half lining', price: 1200 },
        { id: 16, title: 'Simple pant suit with full lining', price: 1500 },
        { id: 17, title: 'Simple blouse', price: 550 },
        { id: 17, title: 'Simple blouse with lining', price: 750 },
        { id: 18, title: 'Simple skirt umbrella cut', price: 1200 },
        { id: 19, title: 'Simple anarkali dress', price: 2500 },
        { id: 20, title: 'Simple lehenga choli', price: 3500 },
        { id: 21, title: 'Saree Fall Pico', price: 350 },


    ],
    addedItems: [],
    total: 0
}
const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 6
        }
    }

    else {
        return state
    }

}

export default cartReducer