const INITIAL_STATE = {
    sections: [
        {
            title: 'DOGS',
            imageUrl: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            size: 'large',
            id: 1,
            linkUrl:'shop/dogs'
        },
        {
            title: 'CATS',
            imageUrl: 'https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            size: 'large',
            id: 2,
            linkUrl:'shop/cats'
        },
        {
            title: 'SUPPLIES',
            imageUrl: 'https://images.pexels.com/photos/7726310/pexels-photo-7726310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            id: 3,
            linkUrl: 'shop/supplies'
        },
        {
            title: 'PHARMACY',
            imageUrl: 'https://images.pexels.com/photos/163944/pexels-photo-163944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            id: 4,
            linkUrl: 'shop/pharmacy'
        },
        {
            title: 'SERVICES',
            imageUrl: 'https://images.pexels.com/photos/6816850/pexels-photo-6816850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            id: 5,
            linkUrl: 'shop/services'
        }
        
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;