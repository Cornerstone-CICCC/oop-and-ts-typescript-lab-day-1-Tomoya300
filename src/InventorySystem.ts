// 🍎 Create an Inventory System where items can be added, updated, and checked for stock.
// 1. Create a tuple type called ItemDetails which holds (string, number, boolean) representing itemName, quantity, and isAvailable.
// 2. Create a type alias called InventoryItem which contains: itemId (number), details (ItemDetails).
// 3. Create a function called addItem which adds an item to the inventory array. The function needs to return an InventoryItem object.
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
// 5. Create a function called checkStock which returns true if the item is available and false otherwise.

type ItemDetails = [string, number, boolean]

type InventoryItem = {
    itemId: number,
    details: ItemDetails,
}

let inventory: InventoryItem[] = [];

function addItem(itemId: number, itemName: string, quantity: number, isAvailable: boolean): InventoryItem {
    let newDetail: ItemDetails = [itemName, quantity, isAvailable]
    let newItem: InventoryItem = { itemId, details: newDetail }
    inventory.push(newItem)
    return newItem
}

function updateStock(itemId: number, quantity: number): string {
    let thisItem: InventoryItem | undefined
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].itemId === itemId) {
            thisItem = inventory[i]
            break
        }
    }

    if (!thisItem) {
        return 'Item not found'
    }

    thisItem.details[1] = quantity
    return `Stock updated for ${thisItem.details[0]}, new quantity: ${thisItem.details[1]}`
}

function checkStock(itemId: number): boolean | string {
    let thisItem: InventoryItem | undefined
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].itemId === itemId) {
            thisItem = inventory[i]
            break
        }
    }

    if (!thisItem) {
        return 'Item not found'
    }

    if (thisItem.details[1] > 0) {
        return true
    } else {
        return false
    }
}

// Test cases (Create more if needed)
console.log(addItem(1, "Laptop", 5, true)) // { itemId: 1, details: ["Laptop", 5, true] }
console.log(inventory)
console.log(updateStock(1, 3)) // "Stock updated for Laptop, new quantity: 3"
console.log(checkStock(1)) // true
console.log(inventory)