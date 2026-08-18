// ==========================================================
// FERRETERÍA SAN FRANCISCO
// CATÁLOGO MODERNO 2026
// ==========================================================


// ==========================================================
// WHATSAPP
// ==========================================================

// ⚠️ CAMBIÁ ESTE NÚMERO POR TU WHATSAPP REAL
// Paraguay: 595 + número
// NO uses +, espacios ni guiones.

const WHATSAPP_NUMBER = "595972537313";


// ==========================================================
// ICONO WHATSAPP
// ==========================================================

const WA_ICON = `
<svg
    class="wa-icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
>

    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .23 5.31.23 11.84c0 2.09.55 4.13 1.59 5.93L.12 24l6.39-1.67a11.82 11.82 0 0 0 5.57 1.41h.01c6.52 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.14-3.41-8.42ZM12.09 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.84 9.84 0 0 1-1.51-5.2C2.19 6.4 6.62 1.98 12.08 1.98c2.64 0 5.12 1.03 6.98 2.89a9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.42 9.84-9.87 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>

</svg>
`;


// ==========================================================
// ICONOS DE CATEGORÍAS
// ==========================================================

const CATEGORY_ICONS = {

    tool: `
        <svg viewBox="0 0 24 24">
            <path d="M21 6.5A5.5 5.5 0 0 1 13.7 11L7 17.7a2.3 2.3 0 1 1-3.2-3.2l6.7-6.7A5.5 5.5 0 0 1 17.5 3l-3 3 2.5 2.5 4-2ZM5.4 16.6a.7.7 0 1 0 1 1 .7.7 0 0 0-1-1Z"/>
        </svg>
    `,

    bolt: `
        <svg viewBox="0 0 24 24">
            <path d="m13 2-9 12h6l-1 8 9-13h-6l1-7Z"/>
        </svg>
    `,

    drop: `
        <svg viewBox="0 0 24 24">
            <path d="M12 2S5 9.2 5 14a7 7 0 0 0 14 0c0-4.8-7-12-7-12Zm0 17a5 5 0 0 1-5-5c0-2.7 3.4-7 5-8.9 1.6 1.9 5 6.2 5 8.9a5 5 0 0 1-5 5Z"/>
        </svg>
    `,

    paint: `
        <svg viewBox="0 0 24 24">
            <path d="M4 3h16v5H4V3Zm2 2v1h12V5H6Zm2 5h8v11H8V10Zm2 2v7h4v-7h-4Z"/>
        </svg>
    `,

    brick: `
        <svg viewBox="0 0 24 24">
            <path d="M3 4h8v5H3V4Zm10 0h8v5h-8V4ZM3 11h5v5H3v-5Zm7 0h11v5H10v-5ZM3 18h8v3H3v-3Zm10 0h8v3h-8v-3Z"/>
        </svg>
    `,

    leaf: `
        <svg viewBox="0 0 24 24">
            <path d="M20.5 3.5C11 3.8 5.5 6.4 4 11c-.9 2.8.3 5.5 3.1 6.4 2.1.7 4.1-.2 5.2-1.8-1.7.6-3.5.4-4.8-.6 1.5-.2 3.3-.8 4.8-1.9 1.7-1.2 3.1-3 4.1-5.3-1.2 1.4-2.7 2.5-4.4 3.2 2-1.7 3.2-3.8 3.5-6.5Z"/>
        </svg>
    `
};


// ==========================================================
// CATEGORÍAS
// ==========================================================

const CATEGORIES = [

    {
        id: "todos",
        name: "Todos",
        description: "Ver catálogo",
        icon: "tool"
    },

    {
        id: "herramientas",
        name: "Herramientas",
        description: "Trabajo y taller",
        icon: "tool"
    },

    {
        id: "electricidad",
        name: "Electricidad",
        description: "Instalación y energía",
        icon: "bolt"
    },

    {
        id: "plomeria",
        name: "Plomería",
        description: "Conexiones y agua",
        icon: "drop"
    },

    {
        id: "pinturas",
        name: "Pinturas",
        description: "Color y protección",
        icon: "paint"
    },

    {
        id: "construccion",
        name: "Construcción",
        description: "Obra y materiales",
        icon: "brick"
    },

    {
        id: "jardin",
        name: "Jardín",
        description: "Riego y mantenimiento",
        icon: "leaf"
    }

];


// ==========================================================
// PRODUCTOS
// ==========================================================

const PRODUCTS = [

    {
        id: 1,
        nombre: "Amoladora a Batería",
        categoria: "herramientas",
        categoriaNombre: "Herramientas",
        imagen: "imagenes/Amoladora a bateria.jpeg",
        descripcion: "Herramienta práctica para trabajos de corte y desbaste.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 2,
        nombre: "Caño Corrugado",
        categoria: "electricidad",
        categoriaNombre: "Electricidad",
        imagen: "imagenes/Ca#U00f1o corrugado.jpeg",
        descripcion: "Caño corrugado para instalaciones eléctricas.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 3,
        nombre: "Cerámica 60x60",
        categoria: "construccion",
        categoriaNombre: "Construcción",
        imagen: "imagenes/Ceramica 60x60.jpeg",
        descripcion: "Cerámica para revestimiento de ambientes.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 4,
        nombre: "Chapa Acanalada",
        categoria: "construccion",
        categoriaNombre: "Construcción",
        imagen: "imagenes/Chapa acanalada.jpeg",
        descripcion: "Chapa acanalada para diferentes proyectos de construcción.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 5,
        nombre: "Claucol",
        categoria: "construccion",
        categoriaNombre: "Construcción",
        imagen: "imagenes/Claucol.jpeg",
        descripcion: "Producto para trabajos de construcción.",
        precio: "Consultar",
        destacado: false
    },

    {
        id: 6,
        nombre: "Cubrelux Amanecer",
        categoria: "pinturas",
        categoriaNombre: "Pinturas",
        imagen: "imagenes/Cubrelux_amanecer.jpeg",
        descripcion: "Producto para terminación y protección.",
        precio: "Consultar",
        destacado: false
    },

    {
        id: 7,
        nombre: "Duchas Lorenzetti",
        categoria: "plomeria",
        categoriaNombre: "Plomería",
        imagen: "imagenes/Duchas lorenzetti.jpeg",
        descripcion: "Duchas para instalaciones del hogar.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 8,
        nombre: "Engrapadora 3 en 1",
        categoria: "herramientas",
        categoriaNombre: "Herramientas",
        imagen: "imagenes/Engrapadora 3en1.jpeg",
        descripcion: "Engrapadora versátil para diferentes trabajos.",
        precio: "Consultar",
        destacado: false
    },

    {
        id: 9,
        nombre: "Fichas y Enchufes",
        categoria: "electricidad",
        categoriaNombre: "Electricidad",
        imagen: "imagenes/Fichas_enchufes.jpeg",
        descripcion: "Accesorios para instalaciones eléctricas.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 10,
        nombre: "Foco LED 100W Dilux",
        categoria: "electricidad",
        categoriaNombre: "Electricidad",
        imagen: "imagenes/Foco led 100w_dilux.jpeg",
        descripcion: "Iluminación LED de alta potencia.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 11,
        nombre: "Focos LED Electron",
        categoria: "electricidad",
        categoriaNombre: "Electricidad",
        imagen: "imagenes/Focos led_electron.jpeg",
        descripcion: "Focos LED para iluminación del hogar.",
        precio: "Consultar",
        destacado: false
    },

    {
        id: 12,
        nombre: "Grifos",
        categoria: "plomeria",
        categoriaNombre: "Plomería",
        imagen: "imagenes/Grifos.jpeg",
        descripcion: "Grifería para instalaciones y renovación.",
        precio: "Consultar",
        destacado: false
    },

    {
        id: 13,
        nombre: "Juego de Llaves Combinadas Tramontina",
        categoria: "herramientas",
        categoriaNombre: "Herramientas",
        imagen: "imagenes/Juego de llaves combinados_tramontina.jpeg",
        descripcion: "Juego de llaves para trabajos de mantenimiento.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 14,
        nombre: "Llave Combinada 10mm Tramontina",
        categoria: "herramientas",
        categoriaNombre: "Herramientas",
        imagen: "imagenes/Llave combinada 10mm_tramontina.jpeg",
        descripcion: "Llave combinada para trabajos de precisión.",
        precio: "Consultar",
        destacado: false
    },

    {
        id: 15,
        nombre: "Llave de Impacto Tramontina",
        categoria: "herramientas",
        categoriaNombre: "Herramientas",
        imagen: "imagenes/Llave impacto_tramontina.jpeg",
        descripcion: "Herramienta para trabajos de ajuste y montaje.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 16,
        nombre: "Maletín de Herramientas",
        categoria: "herramientas",
        categoriaNombre: "Herramientas",
        imagen: "imagenes/Maletin de herramientas.jpeg",
        descripcion: "Maletín práctico para organizar herramientas.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 17,
        nombre: "Manguera para Jardín",
        categoria: "jardin",
        categoriaNombre: "Jardín",
        imagen: "imagenes/Manguera jardin.jpeg",
        descripcion: "Manguera para riego y mantenimiento.",
        precio: "Consultar",
        destacado: false
    },

    {
        id: 18,
        nombre: "Opalatex 20 Litros",
        categoria: "pinturas",
        categoriaNombre: "Pinturas",
        imagen: "imagenes/Opalatex 20lts.jpeg",
        descripcion: "Pintura para trabajos de renovación.",
        precio: "Consultar",
        destacado: true
    },

    {
        id: 19,
        nombre: "Opalatex",
        categoria: "pinturas",
        categoriaNombre: "Pinturas",
        imagen: "imagenes/Opalatex.jpeg",
        descripcion: "Pintura para diferentes superficies.",
        precio: "Consultar",
        destacado: false
    },

    {
        id: 20,
        nombre: "Pincel Dragon",
        categoria: "pinturas",
        categoriaNombre: "Pinturas",
        imagen: "imagenes/Pincel_dragon.jpeg",
        descripcion: "Pincel para trabajos de pintura y terminación.",
        precio: "Consultar",
        destacado: false
    },

    {
        id: 21,
        nombre: "Placa Electrónica",
        categoria: "electricidad",
        categoriaNombre: "Electricidad",
        imagen: "imagenes/Placa electron.jpeg",
        descripcion: "Placa electrónica para aplicaciones y reparación.",
        precio: "Consultar",
        destacado: false
    }

];


// ==========================================================
// ESTADO
// ==========================================================

let categoriaActual = "todos";

let busquedaActual = "";


// ==========================================================
// ELEMENTOS
// ==========================================================

const productsGrid =
    document.getElementById("productsGrid");

const categoriesContainer =
    document.getElementById("categories");

const filtersContainer =
    document.getElementById("filters");

const searchInput =
    document.getElementById("searchInput");

const emptyState =
    document.getElementById("emptyState");

const menuBtn =
    document.getElementById("menuBtn");

const mobileNav =
    document.getElementById("mobileNav");

const backToTop =
    document.getElementById("backToTop");


// ==========================================================
// GENERAR CATEGORÍAS
// ==========================================================

function renderCategories() {

    if (!categoriesContainer) return;

    categoriesContainer.innerHTML =
        CATEGORIES.map(category => {

            const activo =
                categoriaActual === category.id
                    ? "active"
                    : "";

            return `

                <article
                    class="category-card ${activo}"
                    data-category="${category.id}"
                >

                    <div class="category-icon">

                        ${
                            CATEGORY_ICONS[category.icon]
                            || CATEGORY_ICONS.tool
                        }

                    </div>

                    <strong>
                        ${category.name}
                    </strong>

                    <small>
                        ${category.description}
                    </small>

                </article>

            `;

        }).join("");

}


// ==========================================================
// FILTROS
// ==========================================================

function renderFilters() {

    if (!filtersContainer) return;

    filtersContainer.innerHTML =
        CATEGORIES.map(category => {

            const activo =
                categoriaActual === category.id
                    ? "active"
                    : "";

            return `

                <button
                    class="filter-button ${activo}"
                    data-filter="${category.id}"
                >

                    ${category.name}

                </button>

            `;

        }).join("");

}


// ==========================================================
// FILTRAR PRODUCTOS
// ==========================================================

function getFilteredProducts() {

    return PRODUCTS.filter(producto => {

        const coincideCategoria =
            categoriaActual === "todos" ||
            producto.categoria === categoriaActual;

        const texto =
            `${producto.nombre} ${producto.descripcion} ${producto.categoriaNombre}`
                .toLowerCase();

        const coincideBusqueda =
            texto.includes(busquedaActual.toLowerCase());

        return coincideCategoria && coincideBusqueda;

    });

}


// ==========================================================
// CREAR TARJETA
// ==========================================================

function crearProductoHTML(producto) {

    const destacado =
        producto.destacado
            ? `
                <div class="product-badge">
                    DESTACADO
                </div>
              `
            : "";

    return `

        <article
            class="product-card reveal"
            data-product-id="${producto.id}"
        >

            <div class="product-image">

                <div class="product-badges">

                    ${destacado}

                </div>


                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22 viewBox=%220 0 600 400%22%3E%3Crect width=%22600%22 height=%22400%22 fill=%22%23f1f4f5%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23667780%22 font-family=%22Arial%22 font-size=%2222%22%3EImagen no disponible%3C/text%3E%3C/svg%3E';"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${producto.categoriaNombre}
                </span>


                <h3>
                    ${producto.nombre}
                </h3>


                <p class="product-description">
                    ${producto.descripcion}
                </p>


                <div class="product-price">

                    <span class="price">
                        ${producto.precio}
                    </span>

                </div>


                <button
                    class="product-btn"
                    onclick="abrirWhatsAppPorId(${producto.id})"
                    aria-label="Consultar ${producto.nombre} por WhatsApp"
                >

                    ${WA_ICON}

                    <span>
                        Consultar por WhatsApp
                    </span>

                </button>

            </div>

        </article>

    `;

}


// ==========================================================
// MOSTRAR PRODUCTOS
// ==========================================================

function renderProducts() {

    if (!productsGrid) return;

    const productos =
        getFilteredProducts();

    if (productos.length === 0) {

        productsGrid.innerHTML = "";

        if (emptyState) {
            emptyState.classList.remove("hidden");
        }

        return;
    }

    if (emptyState) {
        emptyState.classList.add("hidden");
    }


    productsGrid.innerHTML =
        productos
            .map(crearProductoHTML)
            .join("");


    activarAnimaciones();

}


// ==========================================================
// CAMBIAR CATEGORÍA
// ==========================================================

function cambiarCategoria(categoria) {

    categoriaActual = categoria;

    renderCategories();

    renderFilters();

    renderProducts();

    document
        .getElementById("productos")
        ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


// ==========================================================
// EVENTOS CATEGORÍAS
// ==========================================================

document.addEventListener("click", function(event) {

    const category =
        event.target.closest("[data-category]");

    const filter =
        event.target.closest("[data-filter]");


    if (category) {

        cambiarCategoria(
            category.dataset.category
        );

    }


    if (filter) {

        cambiarCategoria(
            filter.dataset.filter
        );

    }

});


// ==========================================================
// BUSCADOR
// ==========================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function(event) {

            busquedaActual =
                event.target.value.trim();

            renderProducts();

        }
    );

}


// ==========================================================
// WHATSAPP
// ==========================================================

function crearURLWhatsApp(mensaje) {

    return `
        https://wa.me/${WHATSAPP_NUMBER}?text=${
            encodeURIComponent(mensaje)
        }
    `;

}


function abrirWhatsApp(mensaje) {

    if (
        !WHATSAPP_NUMBER ||
        WHATSAPP_NUMBER === "595981000000"
    ) {

        alert(
            "Primero colocá tu número real de WhatsApp en script.js."
        );

        return;
    }


    window.open(
        crearURLWhatsApp(mensaje),
        "_blank"
    );

}


function abrirWhatsAppPorId(id) {

    const producto =
        PRODUCTS.find(
            item => item.id === id
        );

    if (!producto) return;


    const mensaje =
        `Hola, quiero consultar por el producto "${producto.nombre}". ¿Me pueden informar el precio y disponibilidad?`;

    abrirWhatsApp(mensaje);

}


function prepararBotonesWhatsApp() {

    document
        .querySelectorAll("[data-whatsapp]")
        .forEach(button => {

            button.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();

                    abrirWhatsApp(
                        "Hola, quiero consultar por algunos productos de Ferretería San Francisco. ¿Me pueden ayudar?"
                    );

                }
            );

        });

}


// ==========================================================
// ICONOS WHATSAPP
// ==========================================================

function cargarIconosWhatsApp() {

    document
        .querySelectorAll(".wa-icon-container")
        .forEach(container => {

            container.innerHTML =
                WA_ICON;

        });

}


// ==========================================================
// MENU MOBILE
// ==========================================================

if (menuBtn && mobileNav) {

    menuBtn.addEventListener(
        "click",
        function() {

            mobileNav.classList.toggle("active");

        }
    );


    mobileNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                function() {

                    mobileNav.classList.remove(
                        "active"
                    );

                }
            );

        });

}


// ==========================================================
// BOTÓN VOLVER ARRIBA
// ==========================================================

window.addEventListener(
    "scroll",
    function() {

        if (!backToTop) return;


        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        function() {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// ==========================================================
// ANIMACIONES
// ==========================================================

function activarAnimaciones() {

    const elementos =
        document.querySelectorAll(
            ".reveal:not(.visible)"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        elementos.forEach(
            element =>
                element.classList.add("visible")
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            function(entries, obs) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        obs.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elementos.forEach(
        element =>
            observer.observe(element)
    );

}


// ==========================================================
// INICIALIZACIÓN
// ==========================================================

function iniciarPagina() {

    renderCategories();

    renderFilters();

    renderProducts();

    prepararBotonesWhatsApp();

    cargarIconosWhatsApp();

    activarAnimaciones();

}


document.addEventListener(
    "DOMContentLoaded",
    iniciarPagina
);