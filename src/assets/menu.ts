import chillipotato from './dishes/chillipotato.webp'
import chap from './dishes/chap.webp'
import momos from './dishes/momos.webp'
import soups from './dishes/soups.webp'
import chopsuey from './dishes/chopsuey.webp'
import chowmin from './dishes/chowmin.webp'
import gravy from './dishes/gravy.webp'
import macaroni from './dishes/macaroni.webp'
import pasta from './dishes/pasta.webp'
import burger from './dishes/burger.webp'
import combo from './dishes/combo.webp'
import rice from './dishes/rice.webp'


const dishes = [
    
      {
        "id": 1,
        "name": "Chilli Potato",
        "category": "Snacks/starters",
        "type": "veg",
        "image":chillipotato,
        "price": {
          "half": 70,
          "full": 120
        }
        
      },
      {
        "id": 2,
        "name": "Chilli Potato Gravy",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": 80,
          "full": 130
        }
      },
      {
        "id": 3,
        "name": "Honey Chilli Potato",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": 90,
          "full": 150
        }
      },
      {
        "id": 4,
        "name": "Spring Rolls",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": "-",
          "full": 90
        }
      },
      {
        "id": 5,
        "name": "Paneer Spring Rolls",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": "-",
          "full": 120
        }
      },
      {
        "id": 6,
        "name": "French Fries",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": 60,
          "full": 100
        }
      },
      {
        "id": 7,
        "name": "Per Peri Fries",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": 80,
          "full": 120
        }
      },
      {
        "id": 8,
        "name": "Manchurian Dry",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": 110,
          "full": 170
        }
      },
      {
        "id": 9,
        "name": "Chilli Munchurian Dry",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": 150,
          "full": 240
        }
      },
      {
        "id": 10,
        "name": "Paneer Manchurian Dry",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": 150,
          "full": 240
        }
      },
      {
        "id": 11,
        "name": "Chilli Mushroom Dry",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": "-",
          "full": 200
        }
      },
      {
        "id": 12,
        "name": "Chilli Babycorn",
        "category": "Snacks/starters",
        "type": "veg",
        "price": {
          "half": "-",
          "full": 200
        }
      },
      {
        "id": 13,
        "name": "Chilli Chaap",
        "category": "Chaap",
        "type": "veg",
        "image":chap,

        "price": {
          "half": "-",
          "full": 160
        }
      },
      {
        "id": 14,
        "name": "Garlic Chaap",
        "category": "Chaap",
        "type": "veg",
        "price": {
          "half": "-",
          "full": 160
        }
      },
      {
        "id": 15,
        "name": "Veg Momos (steam/fried)",
        "category": "Momos",
        "type": "veg",
        "image":momos,

        "price": {
          "half": 40,
          "full": 70
        }
      },
      {
        "id": 16,
        "name": "Paneer Momos (steam/fried)",
        "category": "Momos",
        "type": "veg",
        "price": {
          "half": 50,
          "full": 80
        }
      },
      {
        "id": 17,
        "name": "Veg Kurkure Momos",
        "category": "Momos",
        "type": "veg",
        "price": {
          "half": "-",
          "full": 140
        }
      },
      {
        "id": 18,
        "name": "Paneer Kurkure Momos",
        "category": "Momos",
        "type": "veg",
        "price": {
          "half": "-",
          "full": 150
        }
      },

    {
        "id": 19,
        "name": "Noodle Soup",
        "category": "Soups",
        "type": "veg",
        "image":soups,

        "price": {
            "half": "-",
            "full": 100
          }
    },
    {
        "id": 20,
        "name": "Hot & Sour Soup",
        "category": "Soups",
        "type": "veg",
        "price": {
            "half": "-",
            "full": 100
          }
    },
    {
        "id": 21,
        "name": "Veg Manchow Soup",
        "category": "Soups",
        "type": "veg",
        "price": {
            "half": "-",
            "full": 100
          }
    },
    {
        "id": 22,
        "name": "Sweet Corn Soup",
        "category": "Soups",
        "type": "veg",
        "price": {
            "half": "-",
            "full": 120
          }
    },
    {
        "id": 23,
        "name": "Veg Thukpa Soup",
        "category": "Soups",
        "type": "veg",
        "price": {
            "half": "-",
            "full": 140
          }
    },
  
    {
      "id": 24,
      "name": "Chinese Chopsuey",
      "category": "Chopseuy",
      "type": "veg",
      "image":chopsuey,

      "price": {
        "half": "-",
        "full": 150
      }
    },
    {
      "id": 25,
      "name": "American Chopsuey",
      "category": "Chopseuy",
      "type": "veg",
      "price": {
        "half": "-",
        "full": 170
      }
    },
    {
      "id": 26,
      "name": "Veg Chowmein",
      "category": "Chowmein",
      "type": "veg",
      "image":chowmin,

      "price": {
        "half": 80,
        "full": 120
      }
    },
    {
      "id": 27,
      "name": "Paneer Chowmein",
      "category": "Chowmein",
      "type": "veg",
      "price": {
        "half": 90,
        "full": 140
      }
    },
    {
      "id": 28,
      "name": "Chilli Garlic Chowmein",
      "category": "Chowmein",
      "type": "veg",
      "price": {
        "half": 90,
        "full": 130
      }
    },
    {
      "id": 29,
      "name": "Singapori Chowmein",
      "category": "Chowmein",
      "type": "veg",
      "price": {
        "half": 90,
        "full": 150
      }
    },
    {
      "id": 30,
      "name": "Hakka Noodles",
      "category": "Chowmein", 
      "type": "veg",
      "price": {
        "half": 100,
        "full": 160
      }
    },
    {
      "id": 31,
      "name": "Veg Mix Chowmein",
      "category": "Chowmein",
      "type": "veg",
      "price": {
        "half": 120,
        "full": 180
      }
    },
   {
      "id": 32,
      "name": "Veg Fried Rice",
      "category": "Rice",
      "image":rice,

      "type": "veg",
      "price": {
        "half": 80,
        "full": 130
      }
    },
    {
      "id": 33,
      "name": "Paneer Fried Rice",
      "category": "Rice",
      "type": "veg",
      "price": {
        "half": 90,
        "full": 140
      }
    },
    {
      "id": 34,
      "name": "Chilli Garlic Fried Rice",
      "category": "Rice",
      "type": "veg",
      "price": {
        "half": 90,
        "full": 140
      }
    },
    {
      "id": 35,
      "name": "Singapuri Fried Rice",
      "category": "Rice",
      "type": "veg",
      "price": {
        "half": 100,
        "full": 150
      }
    },
    {
      "id": 36,
      "name": "Schezwan Fried Rice",
      "category": "Rice",
      "type": "veg",
      "price": {
        "half": 110,
        "full": 170
      }
    },
   {
      "id": 37,
      "name": "Manchurian Gravy",
      "category": "Gravy",
      "type": "veg",
      "image":gravy,

      "price": {
        "half": 130,
        "full": 200
      }
    },
    {
      "id": 38,
      "name": "Paneer Manchurian Gravy",
      "category": "Gravy",
      "type": "veg",
      "price": {
        "half": 170,
        "full": 260
      }
    },
    {
      "id": 39,
      "name": "Chilli Paneer Gravy",
      "category": "Gravy",
      "type": "veg",
      "price": {
        "half": 170,
        "full": 260
      }
    },
    {
      "id": 40,
      "name": "Veg Hot Garlic Gravy",
      "category": "Gravy",
      "type": "veg",
      "price": {
        "half": 170,
        "full": 260
      }
    },
    {
      "id": 41,
      "name": "Veg Macaroni",
      "category": "Macaroni",
      "image":macaroni,

      "type": "veg",
      "price": {
          "half": 70,
          "full": 120
      }
  },
  {
      "id": 42,
      "name": "Veg Paneer Macaroni",
      "category": "Macaroni",
      "type": "veg",
      "price": {
          "half": 90,
          "full": 140
      }
  },
  {
      "id": 43,
      "name": "Veg Chilli Garlic Macaroni",
      "category": "Macaroni",
      "type": "veg",
      "price": {
          "half": 80,
          "full": 130
      }
  },
  {
      "id": 44,
      "name": "Veg Mix Macaroni",
      "category": "Macaroni",
      "type": "veg",
      "price": {
          "half": 100,
          "full": 170
      }
  },
  {
      "id": 45,
      "name": "Veg Red Sauce Pasta",
      "category": "Pasta",
      "image":pasta,

      "type": "veg",
      "price": {
          "half": 90,
          "full": 140
      }
  },
  {
      "id": 46,
      "name": "Veg White Sauce Pasta",
      "category": "Pasta",
      "type": "veg",
      "price": {
          "half": 100,
          "full": 170
      }
  },
  {
      "id": 47,
      "name": "Veg Mix Sauce Pasta",
      "category": "Pasta",
      "type": "veg",
      "price": {
          "half": 120,
          "full": 180
      }
  },
  {
      "id": 48,
      "name": "Veg Burger",
      "category": "Burger",
      "type": "veg",
      "image":burger,

      "price": {
          "half": "-",
          "full": 50
      }
  },
  {
      "id": 49,
      "name": "Veg Paneer Burger",
      "category": "Burger",
      "type": "veg",
      "price": {
          "half": "-",
          "full": 70
      }
  },
  {
      "id": 50,
      "name": "Chinese Combo - 1",
      "category": "Combo",
      "type": "veg",
      "image":combo,

      "description": "Manchurian Rice + 2 Momos Fried",
      "price": {
          "half": "-",
          "full": 200
      }
  },
  {
      "id": 51,
      "name": "Chinese Combo - 2",
      "category": "Combo",
      "type": "veg",
      "description": "1 Spring Roll + Chowmein + 4 Momos Fried",
      "price": {
          "half": "-",
          "full": 180
      }
  }
  
]

export default dishes