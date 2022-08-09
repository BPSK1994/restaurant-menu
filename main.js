const menu = [
    {
        id: 1,
        title: "Pepperoni",
        price: 8.95,
        image: "./images/pepperoni.png",
        category: "pizza",
        description: "Tomato Sauce, burrata, garlic and basil"
    },
    {
        id: 2,
        title: "Margherita (V)",
        price: 8.75,
        image: "./images/margherita.png",
        category: "pizza",
        description: "Tomato sauce, mozzarella cheese, fresh basil and oregano"
    },
    {
        id: 3,
        title: "Napoli(V)",
        price: 9.75,
        image: "./images/napoli.png",
        category: "pizza",
        description: "Tomato Sauce, mozzarella cheese, capers, anchovies and olives"
    },
    {
        id: 4,
        title: "Diavola",
        price: 9.75,
        image: "./images/diavola.png",
        category: "pizza",
        description: "Tomato Sauce, mozzarella cheese, pepperoni sausage, jalepenos and red onion"
    },
    {
        id: 5,
        title: "Toscana",
        price: 9.95,
        image: "./images/toscana.png",
        category: "pizza",
        description: "Tomato Sauce, mozzarella cheese, ham, mushrooms and pepperoni"
    },
    {
        id: 6,
        title: "Vegetarian(V)",
        price: 9.75,
        image: "./images/vegetarian.png",
        category: "pizza",
        description: "Tomato Sauce, mozzarella cheese, a selection of chargrilled vegetables, rocket leaves and basil oil"
    },
    {
        id: 7,
        title: "Hamburger",
        price: 2.49,
        image: "./images/hamburger.png",
        category: "Burgers",
        description: "Beef Patty, Ketchup, Pickle slices, Mustard and Onions"
    },
    {
        id: 8,
        title: "Cheeseburger",
        price: 0.99,
        image: "./images/cheeseburger.png",
        category: "Burgers",
        description: "Beef Patty, Cheese Slices, Ketchup, Pickle slices, Mustard and Onions"
    }, 
    {
        id: 9,
        title: "Chicken Burger",
        price: 3.49,
        image: "./images/chickenburger.png",
        category: "Burgers",
        description: "Crispy Chicken Patty, Shredded Lettuce and Mayonnaise"
    }, 
    {
        id: 10,
        title: "Vegan Burger",
        price: 3.49,
        image: "./images/veganburger.png",
        category: "Burgers",
        description: "Plant-based Patty, Onions, tangy pickles, crisp shredded lettuce, Roma tomato slices, ketchup, mustard, mayo and a slice of cheese on a toasted sesame seed bun. "
    },
    {
        id: 11,
        title: "Chips",
        price: 1.29,
        image: "./images/chips.png",
        category: "Snacks & Sides",
        description: "Potato sticks fried in Sunflower Oil, with added vinegar and salt"
    },
    {
        id: 12,
        title: "Cucumber Sandwich",
        price: 3.99,
        image: "./images/cucumber.png",
        category: "Snacks & Sides",
        description: "Thin slices of cucumber between two slices of fresh crustless, lightly buttered white bread"
    },
    {
        id: 13,
        title: "Yorkshire pudding",
        price: 2.39,
        image: "./images/yorkshire.png",
        category: "Snacks & Sides",
        description: " Pudding made from egg batter, flour and milk, served with gravy"
    },
    {
        id: 14,
        title: "Scotch egg",
        price: 1,
        image: "./images/scotch.png",
        category: "Snacks & Sides",
        description: "Deep-fried boiled egg wrapped in sausage meat and coated in breadcrumbs"
    },
    {
        id: 15,
        title: "Coleslaw",
        price: 1.29,
        image: "./images/coleslaw.png",
        category: "Salads",
        description: "Finely shredded raw cabbage mixed in mayonnaise"
    },
    {
        id: 16,
        title: "Greek Salad",
        price: 4.99,
        image: "./images/greek.jpg",
        category: "Salads",
        description: "Tomatoes, cucumbers, onion, feta cheese and olives. Dressed with salt, Greek oregano, and olive oil"
    },
    {
        id: 17,
        title: "Tea",
        price: 2.50,
        image: "./images/teanew.png",
        category: "drinks",
        description: "Black/Green/White/Fruit"
    },
    {
        id: 18,
        title: "Juice",
        price: 3.49,
        image: "./images/juice.png",
        category: "drinks",
        description: "Orange/Mango/Apple"
    },
    {
        id: 19,
        title: "Soft Drink",
        price: 1.20,
        image: "./images/cola.png",
        category: "drinks",
        description: "Pepsi/Coca Cola/Fanta"
    }
];

const menuItems = document.querySelector('.menu__items');

const filterBtns = document.querySelectorAll('.filter-btn');


// Load items
window.addEventListener("DOMContentLoaded", function() {
displayItems(menu);
});


// Filter Items
filterBtns.forEach(function(item) {
    item.addEventListener('click', function(event) {

        const category = event.currentTarget.dataset.id;

        const menuCategory = menu.filter(function(item) {
            if(item.category.toLowerCase() == category) {
                return item;
            }
        });

        
        if(category == "all") {
            displayItems(menu);
        } else {
            displayItems(menuCategory);
        }

    });
});


function displayItems(items) {
    let displayMenu = items.map(function(item) {
        return `<div class="item-container">
        <img class = "item__img" src = ${item.image} alt = "">
        <div class = "item__info">
            <header class = "item__header">
                <h4 class = "item__heading">${item.title}</h4>
                <p class = "item__text">${item.description}</p>
            </header>
            <h4 class = "item__price">£ ${item.price}</h4>
        </div>
    </div>`
});
displayMenu = displayMenu.join('');
menuItems.innerHTML = displayMenu;
}