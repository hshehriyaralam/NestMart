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
    title: "NestMart - Quality Products for Every Lifestyle",
    description:
      "Shop NestMart for clothes, shoes, groceries, and everyday essentials. Discover quality products and enjoy a convenient online shopping experience.",
  },

  "/shop": {
    title: "Shop Quality Products - NestMart",
    description:
      "Browse NestMart's collection of quality products, groceries, snacks, beverages, and everyday essentials.",
  },

  "/about": {
    title: "About Us - NestMart",
    description:
      "Learn more about NestMart and our commitment to providing quality products and a convenient online shopping experience.",
  },

  "/contact": {
    title: "Contact Us - NestMart",
    description:
      "Contact NestMart for questions, support, product information, or help with your online shopping experience.",
  },

  "/blog": {
    title: "Food & Shopping Blog - NestMart",
    description:
      "Read NestMart articles, healthy food ideas, recipes, shopping tips, product guides, and useful information for everyday living.",
  },

  "/auth/login": {
    title: "Login to Your Account - NestMart",
    description:
      "Log in to your NestMart account to manage your orders, wishlist, and online shopping experience.",
  },

  "/auth/signup": {
    title: "Create Your NestMart Account",
    description:
      "Create your NestMart account to enjoy convenient online shopping and manage your orders and wishlist.",
  },

  "/auth/forget-password": {
    title: "Reset Your Password - NestMart",
    description:
      "Reset your NestMart account password securely and regain access to your online shopping account.",
  },
};

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
    // Example: /products/organic-rolled-oats
    // ==========================================
    else if (pathname.startsWith("/products/")) {
      const slug = pathname.replace("/products/", "").split("/")[0];

      const product = data.products.find(
        (item) => item.slug === slug
      );

      if (product) {
        seo = {
          title: `${product.name} - NestMart`,
          description: `${product.name} by ${product.brand}. Shop this ${product.category} product at NestMart for ${product.price}.`,
        };
      }
    }

    // ==========================================
    // 3. BLOG DETAIL
    // Example: /blog/1
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
          title: `${blog.title} - NestMart Blog`,
          description: `Read "${blog.title}" on the NestMart blog. Explore helpful ${blog.category.toLowerCase()} articles, food ideas, recipes, and useful tips.`,
        };
      }
    }

    // ==========================================
    // 4. CATEGORY PAGES
    // Examples:
    // /category/snacks
    // /category/beverages
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
          (item) => item.childCategorySlug === childSlug
        );

        categoryName =
          product?.childCategory ||
          childSlug.replace(/-/g, " ");
      } else if (subSlug) {
        const product = newProducts.find(
          (item) => item.subCategorySlug === subSlug
        );

        categoryName =
          product?.subCategory ||
          subSlug.replace(/-/g, " ");
      } else if (parentSlug) {
        const product = newProducts.find(
          (item) => item.mainCategorySlug === parentSlug
        );

        categoryName =
          product?.mainCategory ||
          parentSlug.replace(/-/g, " ");
      }

      categoryName =
        categoryName.charAt(0).toUpperCase() +
        categoryName.slice(1);

      seo = {
        title: `${categoryName} Products - NestMart`,
        description: `Browse ${categoryName.toLowerCase()} products at NestMart. Discover quality products and shop our collection of everyday essentials.`,
      };
    }

    // ==========================================
    // 5. FALLBACK
    // ==========================================
    if (!seo) {
      seo = {
        title: "NestMart - Quality Products for Every Lifestyle",
        description:
          "Shop NestMart for quality products, groceries, and everyday essentials with a convenient online shopping experience.",
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
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      seo.description
    );

  }, [location.pathname]);

  return null;
}

export default SEOManager;