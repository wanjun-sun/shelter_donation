const SHOP_DATA = {
  dogs: {
    id: 1,
    title: 'dogs',
    routeName: 'dogs',
    items: [
      {
        id: 1,
        name: '$25 Cash',
        imageUrl: 'https://images.pexels.com/photos/9660/business-money-pink-coins.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 25
      },
      {
        id: 2,
        name: 'Merrick Classic Real Beef Recipe Dry Dog Food, 33 lbs.',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3298121-center-1',
        price: 74
      },
      {
        id: 3,
        name: 'Wholehearted Chicken & Rice Recipe Dry Dog Food, 45 lbs.',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3180692-center-1',
        price: 58
      },
      {
        id: 4,
        name: 'ACANA Beef Recipe Wet Dog Food, 12.8 oz., Case of 12',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3347923-center-1',
        price: 44
      },
      {
        id: 5,
        name: 'Hill Chicken Stew Canned Dog Food, 12.5 oz., Case of 12',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2516449-center-1',
        price: 45
      },
      {
        id: 6,
        name: 'Plato Small Bites Made with Salmon Dog Treats, 6 oz.',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3083067-center-1',
        price: 10
      },
      {
        id: 7,
        name: 'Good Lovin Cow Ear Dog Chew, 0.6 oz., Pack of 1',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2729284-center-1',
        price: 3
      },
      {
        id: 8,
        name: 'Good Lovin Pork Arm Bone Dog Chew, 7.0 oz.',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2773744-center-1',
        price: 7
      }
    ]
  },
  cats: {
    id: 2,
    title: 'cats',
    routeName: 'cats',
    items: [
      {
        id: 9,
        name: '$25 Cash',
        imageUrl: 'https://images.pexels.com/photos/9660/business-money-pink-coins.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 25
      },
      {
        id: 10,
        name: 'Instinct Chicken Recipe Cat Food',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,h_1272,q_auto,w_1272/c_pad,h_1272,w_1272/3018011-center-1',
        price: 25
      },
      {
        id: 11,
        name: 'Hills Science Diet Chicken Recipe Cat Food',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/2504341-center-1',
        price: 28
      },
      {
        id: 12,
        name: 'Wellness CORE Grain-Free Turkey Meal & Chicken Meal Cat Food',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2741531-center-1',
        price: 30
      },
      {
        id: 13,
        name: 'Temptations Classics Tuna Flavor Cat Treats, 30 oz.',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3349857-center-1',
        price: 35
      },
      {
        id: 14,
        name: 'B.F.F. Variety Pack Wet Cat Food, 3 oz., Count of 12',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2893341-center-1',
        price: 18
      },
      {
        id: 15,
        name: 'Purina Pro Plan Variety Pack Wet Cat Food, 3 oz., Count of 48',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3129678-center-1',
        price: 70
      },
      {
        id: 16,
        name: 'Meowijuana Catnip Pawty Mix for Cats',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3160211-center-1',
        price: 19
      },
      {
        id: 17,
        name: 'Naturally Fresh Quick-Clumping Multi-Cat Litter, 26 lbs.',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2167525-center-1',
        price: 23
      }
    ]
  },
  supplies: {
    id: 3,
    title: 'supplies',
    routeName: 'supplies',
    items: [
      {
        id: 18,
        name: 'EveryYay Snooze Round Pet Bed, 20" L X 20" W X 20" H',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3173994-center-1',
        price: 20
      },
      {
        id: 19,
        name: 'Reddy Grey & Navy Ceramic & Bamboo Elevated Pet Double Diner',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3359596-center-4',
        price: 18
      },
      {
        id: 20,
        name: 'Reddy Reflective Camo Dog Harness, Medium',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3170929-Center-1',
        price: 50
      },
      {
        id: 21,
        name: 'Petmate Sky Pet Kennel, 36" L X 25" W X 27" H',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3134522-left-1',
        price: 40
      },
      {
        id: 22,
        name: 'Nature Miracle Stain & Odor Remover Spray, 32 fl. oz.',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2732221-center-1',
        price: 8
      },
      {
        id: 23,
        name: 'Petstages Chase Meowtain Cat Toy, Medium',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3131727-center-1',
        price: 20
      },
      {
        id: 24,
        name: 'You & Me 5-Level Cat Tree, 54" H',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2904126-center-1',
        price: 50
      },
      {
        id: 25,
        name: 'Well & Good Stainless Steel Nail Clippers for Pets',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2369434-center-3',
        price: 12
      }
    ]
  },
  pharmacy: {
    id: 4,
    title: 'pharmacy',
    routeName: 'pharmacy',
    items: [
      {
        id: 26,
        name: 'Credelio Chewable Tablets for Dogs 12.1-25 lbs',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3261302-center-1',
        price: 21
      },
      {
        id: 27,
        name: 'Carprovet Caplets 75 mg, 60 Count',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3442787-center-1',
        price: 29
      },
      {
        id: 28,
        name: 'Atropine Ophthalmic Ointment 1%, 3.5 gm',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3443755-center-1',
        price: 31
      },
      {
        id: 29,
        name: 'Doxycycline (Generic) 100 mg, 50 Tablets',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3442736-center-1',
        price: 20
      },
      {
        id: 30,
        name: 'Heartgard Plus Chewables for Dogs 26 to 50 lbs.',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2976955-center-1',
        price: 54
      }
    ]
  },
  services: {
    id: 5,
    title: 'services',
    routeName: 'services',
    items: [ 
      {
        id: 31,
        name: 'Grooming, One Time',
        imageUrl: 'https://images.pexels.com/photos/6816850/pexels-photo-6816850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        price: 40
      },
      {
        id: 32,
        name: 'Dog/Cat Rabies Vaccine',
        imageUrl: 'https://images.pexels.com/photos/8635336/pexels-photo-8635336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 20
      },
      {
        id: 33,
        name: 'Pet Dental Cleaning',
        imageUrl: 'https://images.pexels.com/photos/662417/pexels-photo-662417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 120
      },
      {
        id: 34,
        name: 'Dog Training, 5 Series',
        imageUrl: 'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 250
      },
      {
        id: 35,
        name: 'Spay & Neuter',
        imageUrl: 'https://images.pexels.com/photos/1350591/pexels-photo-1350591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 90
      }
    ]
  }
};

export default SHOP_DATA;
