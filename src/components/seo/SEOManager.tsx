import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { data } from "@/data/productCard";
import { newProducts } from "@/data/products";

interface SEOData {
  title: string;
  description: string;
}

const staticSEO: Record<string, SEOData> = {
  "/": {
    title: "NestMart - Quality Products & Everyday Essentials",
    description:
      "Shop NestMart for quality clothes, shoes, groceries, and everyday essentials. Discover great products and enjoy a convenient online shopping experience.",
  },

  "/shop": {
    title: "Shop Quality Products & Essentials - NestMart",
    description:
      "Browse NestMart's collection of quality products, groceries, snacks, beverages, clothes, shoes, and everyday essentials for convenient online shopping.",
  },

  "/about": {
    title: "About NestMart - Quality Products & Shopping",
    description:
      "Learn about NestMart, our products, and our commitment to making everyday shopping simple with quality products and a convenient online experience.",
  },

  "/contact": {
    title: "Contact NestMart - Customer Support & Help",
    description:
      "Contact NestMart for product questions, order support, shopping assistance, and other customer service inquiries. We are here to help you.",
  },

  "/blog": {
    title: "Food, Recipes & Shopping Tips - NestMart Blog",
    description:
      "Explore the NestMart blog for healthy food ideas, easy recipes, shopping tips, product guides, and useful information for everyday living.",
  },

  "/auth/login": {
    title: "Login to Your NestMart Account",
    description:
      "Log in to your NestMart account to manage orders, access your wishlist, view shopping activity, and enjoy a convenient online shopping experience.",
  },

  "/auth/signup": {
    title: "Create a NestMart Account - Start Shopping",
    description:
      "Create your NestMart account to enjoy convenient online shopping, manage orders, save products to your wishlist, and access your account securely.",
  },

  "/auth/forget-password": {
    title: "Reset Your NestMart Account Password",
    description:
      "Reset your NestMart account password securely and regain access to your account, orders, wishlist, and other online shopping features.",
  },

  "/terms": {
    title: "Terms & Conditions - NestMart Shopping",
    description:
      "Read NestMart's terms and conditions covering online shopping, accounts, orders, payments, shipping, returns, acceptable use, and customer responsibilities.",
  },

  "/privacy": {
    title: "Privacy Policy - How NestMart Protects Data",
    description:
      "Learn how NestMart collects, uses, protects, and manages customer information, cookies, account data, orders, and other information on our website.",
  },

  "/faqs": {
    title: "Frequently Asked Questions - NestMart Help",
    description:
      "Find answers to common NestMart questions about orders, products, payments, shipping, returns, accounts, delivery, and other shopping-related topics.",
  },

  "/support": {
    title: "NestMart Support - Shopping & Order Help",
    description:
      "Get help with NestMart orders, products, accounts, payments, shipping, returns, and other shopping questions through our customer support resources.",
  },

  "/cart": {
    title: "Shopping Cart - NestMart",
    description:
      "Review the products in your NestMart shopping cart, check your selected items, and continue to checkout when you are ready to place your order.",
  },

  "/wishlist": {
    title: "My Wishlist - Saved Products | NestMart",
    description:
      "View your saved NestMart products in one place. Manage your wishlist and keep track of items you may want to purchase later.",
  },

  "/track-order": {
    title: "Track Your Order - NestMart",
    description:
      "Track your NestMart order and check its current delivery status. Use your order information to stay updated on your purchase and shipment.",
  },

  "/shipping-details": {
    title: "Shipping Details & Delivery Information - NestMart",
    description:
      "Learn about NestMart shipping, delivery information, estimated delivery times, shipping fees, order tracking, and what to do with delivery issues.",
  },
};

function limitTitle(title: string, maxLength = 60): string {
  if (title.length <= maxLength) {
    return title;
  }

  return `${title.substring(0, maxLength - 3).trim()}...`;
}

function limitDescription(
  description: string,
  maxLength = 160
): string {
  const result = description.trim();

  if (result.length <= maxLength) {
    return result;
  }

  return `${result.substring(0, maxLength - 3).trim()}...`;
}

function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    let seo: SEOData | null = null;

    // ==========================================
    // 1. STATIC ROUTES
    // ==========================================
    if (staticSEO[pathname]) {
      seo = staticSEO[pathname];
    }

    // ==========================================
    // 2. PRODUCT DETAIL
    // Example:
    // /products/organic-rolled-oats
    // ==========================================
    else if (pathname.startsWith("/products/")) {
      const slug = decodeURIComponent(
        pathname.replace("/products/", "").split("/")[0]
      );

      const product = data.products.find(
        (item) => item.slug === slug
      );

      if (product) {
        seo = {
          title: limitTitle(
            `${product.name} - ${product.brand} | NestMart`
          ),

          description: limitDescription(
            `Shop ${product.name} by ${product.brand} at NestMart. Browse this ${product.category} product, view product details, and enjoy a convenient online shopping experience.`
          ),
        };
      }
    }

    // ==========================================
    // 3. BLOG DETAIL
    // Example:
    // /blog/1
    // ==========================================
    else if (pathname.startsWith("/blog/")) {
      const id = Number(
        pathname.replace("/blog/", "").split("/")[0]
      );

      const blog = data.blogs.find(
        (item) => item.id === id
      );

      if (blog) {
        seo = {
          title: limitTitle(
            `${blog.title} - NestMart Blog`
          ),

          description: limitDescription(
            `Read ${blog.title} on the NestMart blog. Explore ${blog.category.toLowerCase()} ideas, helpful food tips, recipes, and useful information for everyday living.`
          ),
        };
      }
    }

    // ==========================================
    // 4. CATEGORY PAGES
    // Examples:
    // /category/shoes-and-footware
    // /category/food/snacks
    // ==========================================
    else if (pathname.startsWith("/category")) {
      const slugs = pathname
        .replace("/category", "")
        .split("/")
        .filter(Boolean);

      const [parentSlug, subSlug, childSlug] = slugs;

      let categoryName = "All Products";

      if (childSlug) {
        const product = newProducts.find(
          (item) =>
            item.childCategorySlug === childSlug
        );

        categoryName =
          product?.childCategory ||
          childSlug.replace(/-/g, " ");
      } else if (subSlug) {
        const product = newProducts.find(
          (item) =>
            item.subCategorySlug === subSlug
        );

        categoryName =
          product?.subCategory ||
          subSlug.replace(/-/g, " ");
      } else if (parentSlug) {
        const product = newProducts.find(
          (item) =>
            item.mainCategorySlug === parentSlug
        );

        categoryName =
          product?.mainCategory ||
          parentSlug.replace(/-/g, " ");
      }

      categoryName = categoryName
        .split(" ")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");

      seo = {
        title: limitTitle(
          `${categoryName} Products - Shop Online | NestMart`
        ),

        description: limitDescription(
          `Browse ${categoryName.toLowerCase()} products at NestMart. Discover quality products, compare options, and shop our collection of everyday essentials online.`
        ),
      };
    }

    // ==========================================
    // 5. FALLBACK
    // ==========================================
    if (!seo) {
      seo = {
        title: "NestMart - Quality Products & Shopping",
        description:
          "Shop NestMart for quality products, groceries, clothes, shoes, and everyday essentials with a convenient online shopping experience.",
      };
    }

    // ==========================================
    // UPDATE TITLE
    // ==========================================
    document.title = seo.title;

    // ==========================================
    // UPDATE META DESCRIPTION
    // ==========================================
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!metaDescription) {
      metaDescription =
        document.createElement("meta");

      metaDescription.name = "description";

      document.head.appendChild(
        metaDescription
      );
    }

    metaDescription.setAttribute(
      "content",
      seo.description
    );
  }, [location.pathname]);

  return null;
}

export default SEOManager;
