/* ================= TYPES ================= */

export interface CategoryNode {
    id: number
    image?: string
    name: string
    slug: string
    productsAvailable?: boolean
    children?: CategoryNode[]
}

/* ================= DATA ================= */

export const categoriesData: CategoryNode[] = [
    {
        id: 1,
        image: "/categoriesCard/category-1.png",
        name: "Household & Laundry",
        slug: "household-laundry",
        children: [
            {
                id: 11,
                name: "Home Essentials",
                slug: "home-essentials",
                children: [
                    {
                        id: 111,
                        name: "Insecticides",
                        slug: "insecticides",
                        productsAvailable: true
                    },
                    {
                        id: 112,
                        name: "Air Fresheners",
                        slug: "air-fresheners",
                        productsAvailable: true
                    },
                    {
                        id: 113,
                        name: "Towels & Tissues",
                        slug: "towels-and-tissues",
                        productsAvailable: true
                    },
                    {
                        id: 114,
                        name: "Home Decor",
                        slug: "home-decor",
                        productsAvailable: true
                    },
                    {
                        id: 115,
                        name: "Home Accessories",
                        slug: "home-accessories",
                        productsAvailable: true
                    },
                    {
                        id: 116,
                        name: "Badsheets & Curtains",
                        slug: "badsheets-curtains",
                        productsAvailable: true
                    },
                    {
                        id: 117,
                        name: "Tools & Solutions",
                        slug: "tools-solutions",
                        productsAvailable: true
                    },
                    {
                        id: 118,
                        name: "Mats & Rugs",
                        slug: "mats-rugs",
                        productsAvailable: true
                    }
                ]
            },
            {
                id: 12,
                name: "Toilet & Surface Cleaners",
                slug: "toilet-surface-cleaners",
                children: [],
                productsAvailable: true
            },
            {
                id: 13,
                name: "Dishwashing",
                slug: "dishwashing",
                children: [
                    {
                        id: 131,
                        name: "Powder, Soap & Liquids",
                        slug: "powder-soap-liquids",
                        productsAvailable: true
                    },
                    {
                        id: 132,
                        name: "Scrubbers & Brushes",
                        slug: "scrubbers-brushes",
                        productsAvailable: true
                    }
                ]
            },
            {
                id: 14,
                name: "Laundry",
                slug: "laundry",
                children: [
                    {
                        id: 141,
                        name: "Washing Powder",
                        slug: "washing-powder",
                        productsAvailable: true
                    },
                    {
                        id: 142,
                        name: "Liquid Detergent",
                        slug: "liquid-detergent",
                        productsAvailable: true
                    }
                ]
            }
        ]
    },

    {
        id: 2,
        image: "/categoriesCard/category-2.png",
        name: "Desserts & Baking",
        slug: "desserts-baking",
        children: [
            {
                id: 21,
                name: "Traditional",
                slug: "traditional",
                children: [],
                productsAvailable: true
            },
            {
                id: 22,
                name: "Jelly & Custards",
                slug: "jelly-custards",
                children: [],
                productsAvailable: true
            },
            {
                id: 23,
                name: "Cakes & Toppings",
                slug: "cakes-toppings",
                children: [],
                productsAvailable: true
            },
            {
                id: 24,
                name: "Baking Essentials",
                slug: "baking-essentials",
                children: [],
                productsAvailable: true
            }
        ]
    },

    {
        id: 3,
        image: "/categoriesCard/category-3.png",
        name: "Toys",
        slug: "desserts-baking",
        children: [
            {
                id: 31,
                name: "Flash Cards",
                slug: "traditional",
                children: [],
                productsAvailable: true
            },
        ]
    },

    {
        id: 4,
        image: "/categoriesCard/category-4.png",
        name: "Grocery",
        slug: "grocery",
        children: [
            {
                id: 41,
                name: "Foot Staples",
                slug: "foot-staples",
                children: [
                    {
                        id: 411,
                        name: "Soups & Crackers",
                        slug: "soups-crackers",
                        productsAvailable: true
                    },
                    {
                        id: 412,
                        name: "Air Fresheners",
                        slug: "air-fresheners",
                        productsAvailable: true
                    },
                    {
                        id: 413,
                        name: "Towels & Tissues",
                        slug: "towels-and-tissues",
                        productsAvailable: true
                    },
                    {
                        id: 414,
                        name: "Home Decor",
                        slug: "home-decor",
                        productsAvailable: true
                    },
                    {
                        id: 415,
                        name: "Home Accessories",
                        slug: "home-accessories",
                        productsAvailable: true
                    },
                    {
                        id: 416,
                        name: "Badsheets & Curtains",
                        slug: "badsheets-curtains",
                        productsAvailable: true
                    },
                    {
                        id: 417,
                        name: "Tools & Solutions",
                        slug: "tools-solutions",
                        productsAvailable: true
                    },
                    {
                        id: 418,
                        name: "Mats & Rugs",
                        slug: "mats-rugs",
                        productsAvailable: true
                    }
                ]
            },
            {
                id: 12,
                name: "Toilet & Surface Cleaners",
                slug: "toilet-surface-cleaners",
                children: [],
                productsAvailable: true
            },
            {
                id: 13,
                name: "Dishwashing",
                slug: "dishwashing",
                children: [
                    {
                        id: 131,
                        name: "Powder, Soap & Liquids",
                        slug: "powder-soap-liquids",
                        productsAvailable: true
                    },
                    {
                        id: 132,
                        name: "Scrubbers & Brushes",
                        slug: "scrubbers-brushes",
                        productsAvailable: true
                    }
                ]
            },
            {
                id: 14,
                name: "Laundry",
                slug: "laundry",
                children: [
                    {
                        id: 141,
                        name: "Washing Powder",
                        slug: "washing-powder",
                        productsAvailable: true
                    },
                    {
                        id: 142,
                        name: "Liquid Detergent",
                        slug: "liquid-detergent",
                        productsAvailable: true
                    }
                ]
            }
        ]
    },

    {
        id: 5,
        image: "/categoriesCard/category-5.png",
        name: "Frozen Food",
        slug: "frozen-food",
        children: [
            {
                id: 51,
                name: "Ready Meals & Snacks",
                slug: "ready-meals-snacks",
                children: [],
                productsAvailable: true
            },
            {
                id: 52,
                name: "Parathas &  Breads",
                slug: "parathas-breads",
                children: [],
                productsAvailable: true
            },
        ]
    },


    {
        id: 6,
        image: "/categoriesCard/category-3.png",
        name: "Fresh Product",
        slug: "fresh-product",
        children: [
            {
                id: 61,
                name: "Fresh Meats & Poultry",
                slug: "fresh-meats-poultry",
                children: [],
                productsAvailable: true
            },
            {
                id: 62,
                name: "Fruits",
                slug: "fruits",
                children: [],
                productsAvailable: true
            },
            {
                id: 63,
                name: "Vegetables",
                slug: "vegetables",
                children: [],
                productsAvailable: true
            },
        ]
    },
    {
        id: 7,
        image: "/categoriesCard/category-2.png",
        name: "Ramadan Packages",
        slug: "ramadan-packages",
        children: []
    },
    {
        id: 8,
        image: "/categoriesCard/category-1.png",
        name: "Nest Masala",
        slug: "nest-masala",
        children: []
    },
    {
        id: 9,
        image: "/categoriesCard/category-4.png",
        name: "Lotions & Powders",
        slug: "lotions-powders",
        children: []
    },
    {
        id: 10,
        image: "/categoriesCard/category-3.png",
        name: "Newborns & Infants",
        slug: "newborns-infants",
        children: []
    },
    {
        id: 12,
        image: "/categoriesCard/category-2.png",
        name: "Body Luxuries",
        slug: "body-luxuries",
        children: []
    },

]
