const DUMMY_DATA = {
    men: [
        {
            id: 111,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['38', '39', '40', '41', '42', '43'],
            colors: ['red', 'black', 'grey'],
            price: 14.99,
            oldPrice: 34.99,
            image: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'shoes'
        },
        {
            id: 112,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['38', '39', '40', '41', '42', '43', '44'],
            colors: ['red', 'black', 'grey'],
            price: 59.99,
            image: 'https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'shoes'
        },
        {
            id: 113,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['39', '40', '41', '42', '43', '44'],
            colors: ['red', 'black', 'grey'],
            price: 79.90,
            image: 'https://images.pexels.com/photos/2692460/pexels-photo-2692460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'shoes'
        },
        {
            id: 114,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['39', '40', '41', '42', '43', '44'],
            colors: ['red', 'black', 'grey'],
            price: 85.90,
            image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'shoes'
        },
        {
            id: 115,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['39', '40', '41', '42', '43', '44'],
            colors: ['red', 'black', 'grey'],
            price: 79.90,
            image: 'https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'shoes'
        },
        {
            id: 116,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['39', '40', '41', '42', '43', '44'],
            colors: ['red', 'black', 'grey'],
            price: 85.90,
            image: 'https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'shoes'
        },
        {
            id: 117,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['s', 'm', 'l', 'xl'],
            colors: ['red', 'black', 'grey'],
            price: 24.99,
            image: 'https://images.pexels.com/photos/2513547/pexels-photo-2513547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            category: 'tshirt'
        },
        {
            id: 118,
            description: 'lorem',
            title: 'Lorem ipsum',
            size: ['s', 'm', 'l', 'xl'],
            colors: ['red', 'black', 'grey'],
            price: 14.99,
            image: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'tshirt'
        },
        {
            id: 119,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['s', 'm', 'l', 'xl'],
            colors: ['red', 'grey'],
            price: 24.99,
            image: 'https://images.pexels.com/photos/1080680/pexels-photo-1080680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'tshirt'
        },
        {
            id: 120,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['s', 'm', 'l', 'xl'],
            colors: ['black', 'grey'],
            price: 24.99,
            image: 'https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'tshirt'
        },

        {
            id: 121,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['s', 'm', 'l', 'xl'],
            colors: ['black', 'grey'],
            price: 34.99,
            image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            category: 'jeans'
        },
        {
            id: 122,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['s', 'm', 'l'],
            colors: ['grey'],
            price: 19.99,
            image: 'https://images.unsplash.com/photo-1559582810-5ee32cae1fe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=661&q=80',
            category: 'jeans'
        },

        {
            id: 123,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['s', 'm', 'l', 'xl'],
            colors: ['black', 'grey'],
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1564767643249-18e11a0ee604?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            category: 'jeans'
        },
        {
            id: 124,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi quaerat illo inventore at, dolor debitis mollitia et commodi qui molestias doloremque aperiam dolorum! Deleniti, ad earum.',
            title: 'Lorem ipsum',
            size: ['s', 'm', 'l', 'xl'],
            colors: ['black', 'grey'],
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1549108949-89cd83414d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            category: 'jeans'
        },
    ]
}

export default DUMMY_DATA;