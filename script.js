/* =========================================================
   FERRETERÍA SAN FRANCISCO
   EXPERIENCIA MODERNA 2026
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const WHATSAPP_NUMBER = "595972537313";

const IMAGE_EXTENSIONS = [
    "jpg",
    "jpeg",
    "png",
    "webp"
];


/* =========================================================
   CATEGORÍAS
========================================================= */

const CATEGORIES = [

    {
        id: "herramientas",
        name: "Herramientas",
        icon: "🔨",
        description: "Manuales y eléctricas"
    },

    {
        id: "electricidad",
        name: "Electricidad",
        icon: "⚡",
        description: "Instalación y accesorios"
    },

    {
        id: "plomeria",
        name: "Plomería",
        icon: "🚰",
        description: "Conexiones y reparación"
    },

    {
        id: "pinturas",
        name: "Pinturas",
        icon: "🎨",
        description: "Color y protección"
    },

    {
        id: "construccion",
        name: "Construcción",
        icon: "🧱",
        description: "Materiales y accesorios"
    },

    {
        id: "jardin",
        name: "Jardín",
        icon: "🌱",
        description: "Cuidado y mantenimiento"
    }

];


/* =========================================================
   PRODUCTOS
========================================================= */

const PRODUCTS = [

    {
        id: 1,
        name: "Taladro Percutor 650W",
        category: "herramientas",
        price: 399000,
        oldPrice: 450000,
        stock: 10,
        icon: "🔧",
        description:
            "Potente y práctico para trabajos del hogar y taller.",
        promo: true
    },

    {
        id: 2,
        name: "Amoladora Angular 4 1/2",
        category: "herramientas",
        price: 450000,
        oldPrice: 520000,
        stock: 8,
        icon: "⚙️",
        description:
            "Ideal para corte, desbaste y trabajos de metal.",
        promo: true
    },

    {
        id: 3,
        name: "Martillo de Carpintero",
        category: "herramientas",
        price: 45000,
        oldPrice: null,
        stock: 20,
        icon: "🔨",
        description:
            "Mango cómodo y construcción resistente.",
        promo: false
    },

    {
        id: 4,
        name: "Juego de Destornilladores",
        category: "herramientas",
        price: 85000,
        oldPrice: 100000,
        stock: 12,
        icon: "🪛",
        description:
            "Set práctico para reparaciones y mantenimiento.",
        promo: true
    },

    {
        id: 5,
        name: "Extensión Eléctrica 5 m",
        category: "electricidad",
        price: 65000,
        oldPrice: null,
        stock: 18,
        icon: "🔌",
        description:
            "Extensión para uso doméstico y taller.",
        promo: false
    },

    {
        id: 6,
        name: "Reflector LED 50W",
        category: "electricidad",
        price: 95000,
        oldPrice: 115000,
        stock: 15,
        icon: "💡",
        description:
            "Iluminación eficiente para interior y exterior.",
        promo: true
    },

    {
        id: 7,
        name: "Llave de Paso 1/2",
        category: "plomeria",
        price: 38000,
        oldPrice: null,
        stock: 25,
        icon: "🚰",
        description:
            "Accesorio para instalaciones y reparaciones.",
        promo: false
    },

    {
        id: 8,
        name: "Rodillo para Pintura",
        category: "pinturas",
        price: 42000,
        oldPrice: null,
        stock: 14,
        icon: "🎨",
        description:
            "Acabado uniforme para trabajos de pintura.",
        promo: false
    },

    {
        id: 9,
        name: "Cinta Métrica 5 m",
        category: "herramientas",
        price: 35000,
        oldPrice: 42000,
        stock: 22,
        icon: "📏",
        description:
            "Medición práctica para obra, hogar y taller.",
        promo: true
    },

    {
        id: 10,
        name: "Guantes de Protección",
        category: "construccion",
        price: 28000,
        oldPrice: null,
        stock: 30,
        icon: "🧤",
        description:
            "Protección para tareas de mantenimiento y obra.",
        promo: false
    },

    {
        id: 11,
        name: "Manguera de Jardín 20 m",
        category: "jardin",
        price: 145000,
        oldPrice: 170000,
        stock: 7,
        icon: "🌿",
        description:
            "Práctica para riego y mantenimiento del jardín.",
        promo: true
    },

    {
        id: 12,
        name: "Caja Organizadora de Herramientas",
        category: "herramientas",
        price: 135000,
        oldPrice: null,
        stock: 9,
        icon: "🧰",
        description:
            "Organizá tus herramientas y accesorios fácilmente.",
        promo: false
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let activeCategory = "todos";

let searchTerm = "";


/* =========================================================
   UTILIDADES
========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("es-PY")
        .format(price);

}


function categoryName(categoryId) {

    const category =
        CATEGORIES.find(
            category => category.id === categoryId
        );

    return category
        ? category.name
        : "Otros";
}


/* =========================================================
   WHATSAPP
========================================================= */

function createWhatsAppLink(message) {

    return `
        https://wa.me/${WHATSAPP_NUMBER}
        ?text=${encodeURIComponent(message)}
    `.replace(/\s+/g, "");
}


function setupWhatsApp() {

    const defaultMessage =
        "Hola, quiero consultar sobre los productos de Ferretería San Francisco.";

    document
        .querySelectorAll("[data-whatsapp]")
        .forEach(link => {

            link.href =
                createWhatsAppLink(
                    defaultMessage
                );

            link.target = "_blank";

            link.rel = "noopener";

        });


    const footerPhone =
        document.getElementById(
            "footerPhone"
        );

    if (footerPhone) {

        footerPhone.textContent =
            `WhatsApp: +${WHATSAPP_NUMBER}`;

    }

}


/* =========================================================
   IMÁGENES AUTOMÁTICAS
========================================================= */

function createImageName(productName) {

    return productName

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .toLowerCase()

        .replace(
            /[^a-z0-9]+/g,
            "-"
        )

        .replace(
            /^-+|-+$/g,
            ""
        );
}


function createAutomaticImage(product) {

    const baseName =
        createImageName(product.name);

    return `

        <img

            src="imagenes/${baseName}.jpg"

            alt="${product.name}"

            loading="lazy"

            class="automatic-image"

            data-base-name="${baseName}"

            data-extension-index="0"

            data-fallback-icon="${product.icon}"

            onerror="tryNextImage(this)"

        >

    `;
}


function tryNextImage(image) {

    const baseName =
        image.dataset.baseName;

    let index =
        Number(
            image.dataset.extensionIndex
        );

    index++;

    if (
        index <
        IMAGE_EXTENSIONS.length
    ) {

        const extension =
            IMAGE_EXTENSIONS[index];

        image.dataset.extensionIndex =
            index;

        image.src =
            `imagenes/${baseName}.${extension}`;

        return;
    }


    const icon =
        image.dataset.fallbackIcon;

    image.outerHTML = `

        <div class="image-not-found">

            <div class="image-not-found-icon">
                ${icon}
            </div>

            <span>
                Agregá la foto en
                <strong>imagenes</strong>
            </span>

        </div>

    `;

}


/* =========================================================
   CATEGORÍAS
========================================================= */

function renderCategories() {

    const container =
        document.getElementById(
            "categories"
        );

    if (!container) return;

    container.innerHTML =

        CATEGORIES
            .map(
                (category, index) => `

                    <button

                        class="
                            category-card
                            reveal
                            ${
                                activeCategory ===
                                category.id
                                    ? "active"
                                    : ""
                            }
                        "

                        data-category="${category.id}"

                        style="
                            transition-delay:
                            ${index * 70}ms
                        "
                    >

                        <span class="category-icon">
                            ${category.icon}
                        </span>

                        <strong>
                            ${category.name}
                        </strong>

                        <small>
                            ${category.description}
                        </small>

                    </button>

                `
            )
            .join("");


    document
        .querySelectorAll(
            "[data-category]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    activeCategory =
                        button.dataset.category;

                    renderCategories();

                    renderFilters();

                    renderProducts();

                    observeRevealElements();

                    document
                        .getElementById(
                            "productos"
                        )
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

        });


    observeRevealElements();

}


/* =========================================================
   FILTROS
========================================================= */

function renderFilters() {

    const container =
        document.getElementById(
            "filters"
        );

    if (!container) return;

    const filters = [

        {
            id: "todos",
            name: "Todos"
        },

        ...CATEGORIES

    ];


    container.innerHTML =

        filters
            .map(
                category => `

                    <button

                        class="
                            filter-button
                            ${
                                activeCategory ===
                                category.id
                                    ? "active"
                                    : ""
                            }
                        "

                        data-filter="${category.id}"
                    >

                        ${category.name}

                    </button>

                `
            )
            .join("");


    document
        .querySelectorAll(
            "[data-filter]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    activeCategory =
                        button.dataset.filter;

                    renderCategories();

                    renderFilters();

                    renderProducts();

                    observeRevealElements();

                }
            );

        });

}


/* =========================================================
   FILTRAR
========================================================= */

function getFilteredProducts() {

    return PRODUCTS.filter(
        product => {

            const categoryMatches =

                activeCategory === "todos" ||

                product.category ===
                    activeCategory;


            const text = `

                ${product.name}

                ${product.description}

                ${categoryName(
                    product.category
                )}

            `.toLowerCase();


            const searchMatches =

                text.includes(
                    searchTerm.toLowerCase()
                );


            return (
                categoryMatches &&
                searchMatches
            );

        }
    );

}


/* =========================================================
   TARJETA
========================================================= */

function createProductCard(product) {

    const image =
        createAutomaticImage(product);


    const message =

        `Hola, me interesa el producto "${product.name}" ` +

        `que vi en la página de Ferretería San Francisco. ` +

        `¿Me pueden confirmar precio y disponibilidad?`;


    return `

        <article
            class="product-card reveal"
        >

            ${
                product.promo
                    ? `
                        <span class="product-badge">
                            🔥 OFERTA
                        </span>
                    `
                    : ""
            }

            <span class="stock-badge">

                ${
                    product.stock > 0
                        ? "Disponible"
                        : "Agotado"
                }

            </span>


            <div class="product-image">

                ${image}

            </div>


            <div class="product-info">

                <span class="product-category">

                    ${categoryName(
                        product.category
                    )}

                </span>


                <h3>
                    ${product.name}
                </h3>


                <p class="product-description">

                    ${product.description}

                </p>


                <div class="price-row">

                    <span class="price">

                        Gs.
                        ${formatPrice(
                            product.price
                        )}

                    </span>


                    ${
                        product.oldPrice
                            ? `
                                <span class="old-price">

                                    Gs.
                                    ${formatPrice(
                                        product.oldPrice
                                    )}

                                </span>
                            `
                            : ""
                    }

                </div>


                <a

                    href="${createWhatsAppLink(
                        message
                    )}"

                    class="product-button"

                    target="_blank"

                    rel="noopener"
                >

                    💬 Consultar por WhatsApp

                </a>

            </div>

        </article>

    `;

}


/* =========================================================
   RENDER PRODUCTOS
========================================================= */

function renderProducts(
    products = getFilteredProducts()
) {

    const grid =
        document.getElementById(
            "productsGrid"
        );

    const empty =
        document.getElementById(
            "emptyState"
        );

    const info =
        document.getElementById(
            "resultsInfo"
        );


    if (!grid) return;


    if (info) {

        info.textContent =

            `${products.length} producto` +

            `${
                products.length !== 1
                    ? "s"
                    : ""
            } encontrado` +

            `${
                products.length !== 1
                    ? "s"
                    : ""
            }`;

    }


    grid.innerHTML =

        products
            .map(
                product =>
                    createProductCard(
                        product
                    )
            )
            .join("");


    if (empty) {

        empty.classList.toggle(
            "hidden",
            products.length > 0
        );

    }


    observeRevealElements();

    setupProductTilt();

}


/* =========================================================
   BUSCADOR
========================================================= */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;


    input.addEventListener(
        "input",
        event => {

            searchTerm =
                event.target.value.trim();

            renderProducts();

        }
    );

}


/* =========================================================
   MENÚ MOBILE
========================================================= */

function setupMobileMenu() {

    const button =
        document.getElementById(
            "menuButton"
        );

    const nav =
        document.getElementById(
            "mobileNav"
        );


    if (!button || !nav) return;


    button.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "open"
            );


            button.textContent =

                nav.classList.contains(
                    "open"
                )
                    ? "✕"
                    : "☰";

        }
    );


    nav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "open"
                    );

                    button.textContent =
                        "☰";

                }
            );

        });

}


/* =========================================================
   PROMOCIONES
========================================================= */

function setupPromotions() {

    const button =
        document.getElementById(
            "promoButton"
        );

    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            const promotions =
                PRODUCTS.filter(
                    product =>
                        product.promo
                );


            activeCategory =
                "todos";

            searchTerm = "";


            const search =
                document.getElementById(
                    "searchInput"
                );

            if (search) {

                search.value = "";

            }


            renderCategories();

            renderFilters();

            renderProducts(
                promotions
            );


            const info =
                document.getElementById(
                    "resultsInfo"
                );

            if (info) {

                info.textContent =
                    `${promotions.length} promociones disponibles`;

            }


            document
                .getElementById(
                    "productos"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

function observeRevealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.visible)"
        );


    if (!("IntersectionObserver" in window)) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "visible"
                                );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}


/* =========================================================
   ELEMENTOS PRINCIPALES REVEAL
========================================================= */

function prepareRevealElements() {

    const elements = [

        ".section-header",

        ".products-header",

        ".benefit",

        ".why-image",

        ".why-content",

        ".contact-card",

        ".promo-content",

        ".footer-grid"

    ];


    elements.forEach(
        selector => {

            document
                .querySelectorAll(
                    selector
                )
                .forEach(
                    element => {

                        element.classList.add(
                            "reveal"
                        );

                    }
                );

        }
    );


    observeRevealElements();

}


/* =========================================================
   EFECTO TILT EN PRODUCTOS
========================================================= */

function setupProductTilt() {

    /*
       En dispositivos táctiles no aplicamos
       este efecto.
    */

    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {

        return;

    }


    document
        .querySelectorAll(
            ".product-card"
        )
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        (y - centerY) /
                        25;


                    const rotateY =
                        (centerX - x) /
                        25;


                    card.style.transform =

                        `
                        perspective(900px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-6px)
                        scale(1.015)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

}


/* =========================================================
   BARRA DE PROGRESO
========================================================= */

function setupScrollProgress() {

    const progress =
        document.createElement(
            "div"
        );

    progress.className =
        "scroll-progress";


    document.body.prepend(
        progress
    );


    window.addEventListener(
        "scroll",
        () => {

            const scrollTop =
                window.scrollY;


            const documentHeight =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;


            const percentage =

                documentHeight > 0

                    ? (
                        scrollTop /
                        documentHeight
                    ) * 100

                    : 0;


            progress.style.width =
                `${percentage}%`;

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   HEADER AL HACER SCROLL
========================================================= */

function setupHeaderScroll() {

    const header =
        document.querySelector(
            ".header"
        );


    if (!header) return;


    window.addEventListener(
        "scroll",
        () => {

            header.classList.toggle(
                "scrolled",
                window.scrollY > 30
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   EFECTO MOUSE EN HERO
========================================================= */

function setupHeroMouseEffect() {

    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {

        return;

    }


    const hero =
        document.querySelector(
            ".hero"
        );


    const card =
        document.querySelector(
            ".hero-card"
        );


    if (!hero || !card) return;


    hero.addEventListener(
        "mousemove",
        event => {

            const x =
                (
                    event.clientX /
                    window.innerWidth
                ) - .5;


            const y =
                (
                    event.clientY /
                    window.innerHeight
                ) - .5;


            card.style.transform = `

                perspective(900px)

                rotateY(${x * 8}deg)

                rotateX(${y * -8}deg)

                translateY(-8px)

            `;

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

}


/* =========================================================
   NAV ACTIVA SEGÚN SCROLL
========================================================= */

function setupActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const links =
        document.querySelectorAll(
            ".desktop-nav a"
        );


    if (!sections.length) return;


    window.addEventListener(
        "scroll",
        () => {

            let current = "";


            sections.forEach(
                section => {

                    const top =
                        section.offsetTop -
                        150;


                    if (
                        window.scrollY >=
                        top
                    ) {

                        current =
                            section.id;

                    }

                }
            );


            links.forEach(
                link => {

                    link.style.color =
                        "";


                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        href ===
                        `#${current}`
                    ) {

                        link.style.color =
                            "white";

                    }

                }
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   ANIMACIÓN DEL AÑO
========================================================= */

function setupYear() {

    const year =
        document.getElementById(
            "year"
        );


    if (year) {

        year.textContent =
            new Date()
                .getFullYear();

    }

}


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupWhatsApp();

        renderCategories();

        renderFilters();

        renderProducts();

        setupSearch();

        setupMobileMenu();

        setupPromotions();

        prepareRevealElements();

        setupProductTilt();

        setupScrollProgress();

        setupHeaderScroll();

        setupHeroMouseEffect();

        setupActiveNavigation();

        setupYear();

    }
);
