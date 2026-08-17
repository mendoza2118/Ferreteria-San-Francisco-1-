/* ============================================================
   FERRETERÍA SAN FRANCISCO
   Catálogo de productos - versión estática
   Imágenes ubicadas en: /imagenes/
============================================================ */


/* ============================================================
   CONFIGURACIÓN
============================================================ */

// IMPORTANTE:
// Cambiá este número por el WhatsApp REAL de la ferretería.
// Paraguay: 595 + número sin el 0 inicial.
//
// Ejemplo:
// const WHATSAPP = "595981123456";

const WHATSAPP = "595972537313";


/* ============================================================
   PRODUCTOS
============================================================ */

const productos = [

    {
        id: 1,
        nombre: "Amoladora a Batería",
        categoria: "Herramientas",
        descripcion: "Amoladora a batería ideal para trabajos de corte, desbaste y mantenimiento.",
        precio: null,
        imagen: "imagenes/Amoladora a bateria.jpeg",
        destacado: true,
        oferta: true
    },


    {
        id: 3,
        nombre: "Cerámica 60x60",
        categoria: "Construcción",
        descripcion: "Cerámica de formato 60x60 ideal para pisos y revestimientos.",
        precio: null,
        imagen: "imagenes/Ceramica 60x60.jpeg",
        destacado: true,
        oferta: false
    },

    {
        id: 4,
        nombre: "Chapa Acanalada",
        categoria: "Construcción",
        descripcion: "Chapa acanalada para techos y diferentes proyectos de construcción.",
        precio: null,
        imagen: "imagenes/Chapa acanalada.jpeg",
        destacado: true,
        oferta: false
    },

    {
        id: 5,
        nombre: "Claucol",
        categoria: "Construcción",
        descripcion: "Producto Claucol para trabajos de construcción y colocación.",
        precio: null,
        imagen: "imagenes/Claucol.jpeg",
        destacado: false,
        oferta: false
    },

    {
        id: 6,
        nombre: "Cubrelux Amanecer",
        categoria: "Pinturas",
        descripcion: "Cubrelux para trabajos de pintura y terminación.",
        precio: null,
        imagen: "imagenes/Cubrelux_amanecer.jpeg",
        destacado: false,
        oferta: false
    },

    {
        id: 7,
        nombre: "Duchas Lorenzetti",
        categoria: "Baño",
        descripcion: "Duchas Lorenzetti para renovar y equipar tu baño.",
        precio: null,
        imagen: "imagenes/Duchas lorenzetti.jpeg",
        destacado: true,
        oferta: false
    },

    {
        id: 8,
        nombre: "Engrapadora 3 en 1",
        categoria: "Herramientas",
        descripcion: "Engrapadora 3 en 1 práctica y versátil para diferentes trabajos.",
        precio: null,
        imagen: "imagenes/Engrapadora 3en1.jpeg",
        destacado: true,
        oferta: true
    },

    {
        id: 9,
        nombre: "Fichas y Enchufes",
        categoria: "Electricidad",
        descripcion: "Fichas y enchufes para instalaciones y reparaciones eléctricas.",
        precio: null,
        imagen: "imagenes/Fichas_enchufes.jpeg",
        destacado: false,
        oferta: false
    },

    {
        id: 10,
        nombre: "Foco LED 100W Dilux",
        categoria: "Iluminación",
        descripcion: "Foco LED Dilux de 100W para iluminación potente y eficiente.",
        precio: null,
        imagen: "imagenes/Foco led 100w_dilux.jpeg",
        destacado: true,
        oferta: true
    },

    {
        id: 11,
        nombre: "Focos LED Electron",
        categoria: "Iluminación",
        descripcion: "Focos LED Electron para iluminación del hogar, comercio y espacios de trabajo.",
        precio: null,
        imagen: "imagenes/Focos led_electron.jpeg",
        destacado: true,
        oferta: false
    },

    {
        id: 12,
        nombre: "Grifos",
        categoria: "Baño",
        descripcion: "Grifos para baño y cocina con diferentes modelos disponibles.",
        precio: null,
        imagen: "imagenes/Grifos.jpeg",
        destacado: true,
        oferta: false
    },

    {
        id: 13,
        nombre: "Juego de Llaves Combinadas Tramontina",
        categoria: "Herramientas",
        descripcion: "Juego de llaves combinadas Tramontina para trabajos profesionales y domésticos.",
        precio: null,
        imagen: "imagenes/Juego de llaves combinados_tramontina.jpeg",
        destacado: true,
        oferta: true
    },

    {
        id: 14,
        nombre: "Llave Combinada 10mm Tramontina",
        categoria: "Herramientas",
        descripcion: "Llave combinada Tramontina de 10 mm, práctica y resistente.",
        precio: null,
        imagen: "imagenes/Llave combinada 10mm_tramontina.jpeg",
        destacado: false,
        oferta: false
    },

    {
        id: 15,
        nombre: "Llave de Impacto Tramontina",
        categoria: "Herramientas",
        descripcion: "Llave de impacto Tramontina para trabajos de mantenimiento y reparación.",
        precio: null,
        imagen: "imagenes/Llave impacto_tramontina.jpeg",
        destacado: true,
        oferta: true
    },

    {
        id: 16,
        nombre: "Maletín de Herramientas",
        categoria: "Herramientas",
        descripcion: "Maletín de herramientas con diferentes accesorios para trabajos del hogar y taller.",
        precio: null,
        imagen: "imagenes/Maletin de herramientas.jpeg",
        destacado: true,
        oferta: true
    },

    {
        id: 17,
        nombre: "Manguera de Jardín",
        categoria: "Jardinería",
        descripcion: "Manguera para jardín, ideal para riego y diferentes tareas exteriores.",
        precio: null,
        imagen: "imagenes/Manguera jardin.jpeg",
        destacado: true,
        oferta: false
    },

    {
        id: 18,
        nombre: "Opalatex 20 Litros",
        categoria: "Pinturas",
        descripcion: "Opalatex en presentación de 20 litros para proyectos de pintura.",
        precio: null,
        imagen: "imagenes/Opalatex 20lts.jpeg",
        destacado: true,
        oferta: true
    },

    {
        id: 19,
        nombre: "Opalatex",
        categoria: "Pinturas",
        descripcion: "Pintura Opalatex para diferentes trabajos de mantenimiento y renovación.",
        precio: null,
        imagen: "imagenes/Opalatex.jpeg",
        destacado: false,
        oferta: false
    },

    {
        id: 20,
        nombre: "Pincel Dragón",
        categoria: "Pinturas",
        descripcion: "Pinceles Dragón para trabajos de pintura y acabados.",
        precio: null,
        imagen: "imagenes/Pincel_dragon.jpeg",
        destacado: false,
        oferta: false
    },

    {
        id: 21,
        nombre: "Placa Electrón",
        categoria: "Electricidad",
        descripcion: "Placa Electrón para instalaciones eléctricas y proyectos del hogar.",
        precio: null,
        imagen: "imagenes/Placa electron.jpeg",
        destacado: false,
        oferta: false
    }

];


/* ============================================================
   VARIABLES
============================================================ */

let productosActuales = [...productos];

let categoriaActual = "Todos";

let textoBusqueda = "";


/* ============================================================
   ELEMENTOS DEL DOM
============================================================ */

const productosContainer =
    document.querySelector("#productos-container") ||
    document.querySelector(".products-grid") ||
    document.querySelector(".products-container");

const buscador =
    document.querySelector("#buscador") ||
    document.querySelector("#searchInput") ||
    document.querySelector(".search-box input");

const categoriasContainer =
    document.querySelector("#categorias-container") ||
    document.querySelector(".categories-grid") ||
    document.querySelector(".categories-container");

const filtrosContainer =
    document.querySelector("#filtros-container") ||
    document.querySelector(".filters");

const contadorProductos =
    document.querySelector("#contador-productos") ||
    document.querySelector(".results-info");


/* ============================================================
   WHATSAPP
============================================================ */

function abrirWhatsApp(producto = null) {

    let mensaje;

    if (producto) {

        mensaje =
            `Hola, Ferretería San Francisco 👋\n\n` +
            `Estoy interesado/a en el producto:\n` +
            `*${producto.nombre}*\n\n` +
            `¿Me podrían pasar el precio y disponibilidad?`;

    } else {

        mensaje =
            `Hola, Ferretería San Francisco 👋\n\n` +
            `Quisiera consultar por algunos productos.`;

    }

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}


/* ============================================================
   GENERAR TARJETA DE PRODUCTO
============================================================ */

function crearProductoHTML(producto) {

    const precioHTML = producto.precio
        ? `<div class="price">Gs. ${formatearPrecio(producto.precio)}</div>`
        : `<div class="price consult-price">Consultar precio</div>`;

    const ofertaHTML = producto.oferta
        ? `<span class="product-badge">OFERTA</span>`
        : "";

    const destacadoHTML = producto.destacado
        ? `<span class="stock-badge">DESTACADO</span>`
        : "";

    return `
        <article
            class="product-card"
            data-id="${producto.id}"
            data-category="${producto.categoria}"
        >

            <div class="product-image">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://via.placeholder.com/600x600?text=Imagen+no+disponible';"
                >

                <div class="product-badges">
                    ${ofertaHTML}
                    ${destacadoHTML}
                </div>

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${producto.categoria}
                </span>

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="product-description">
                    ${producto.descripcion}
                </p>

                <div class="product-bottom">

                    ${precioHTML}

                    <button
                        class="product-button"
                        onclick="abrirWhatsAppPorId(${producto.id})"
                    >
                        <span>Consultar</span>
                        <span>↗</span>
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* ============================================================
   MOSTRAR PRODUCTOS
============================================================ */

function mostrarProductos(lista = productosActuales) {

    if (!productosContainer) {
        console.warn("No se encontró el contenedor de productos.");
        return;
    }

    if (lista.length === 0) {

        productosContainer.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    🔎
                </div>

                <h3>
                    No encontramos ese producto
                </h3>

                <p>
                    Probá con otro nombre o consultanos directamente por WhatsApp.
                </p>

                <button
                    class="btn"
                    onclick="abrirWhatsApp()"
                >
                    Consultar por WhatsApp
                </button>

            </div>
        `;

        actualizarContador(0);

        return;
    }

    productosContainer.innerHTML =
        lista.map(crearProductoHTML).join("");

    actualizarContador(lista.length);

    activarAnimacionesProductos();
}


/* ============================================================
   ABRIR WHATSAPP POR PRODUCTO
============================================================ */

function abrirWhatsAppPorId(id) {

    const producto =
        productos.find(p => p.id === id);

    if (producto) {
        abrirWhatsApp(producto);
    }
}


/* ============================================================
   FORMATEAR PRECIO
============================================================ */

function formatearPrecio(precio) {

    return Number(precio)
        .toLocaleString("es-PY");
}


/* ============================================================
   BUSCADOR
============================================================ */

function buscarProductos() {

    textoBusqueda =
        buscador
            ? buscador.value.toLowerCase().trim()
            : "";

    aplicarFiltros();
}


/* ============================================================
   FILTRAR PRODUCTOS
============================================================ */

function aplicarFiltros() {

    productosActuales = productos.filter(producto => {

        const coincideCategoria =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const textoProducto =
            `
            ${producto.nombre}
            ${producto.categoria}
            ${producto.descripcion}
            `.toLowerCase();

        const coincideBusqueda =
            textoProducto.includes(textoBusqueda);

        return coincideCategoria && coincideBusqueda;

    });

    mostrarProductos(productosActuales);
}


/* ============================================================
   CATEGORÍAS
============================================================ */

function obtenerCategorias() {

    const categorias = [
        "Todos",
        ...new Set(productos.map(producto => producto.categoria))
    ];

    return categorias;
}


/* ============================================================
   CREAR FILTROS DE CATEGORÍAS
============================================================ */

function crearCategorias() {

    const categorias = obtenerCategorias();

    if (categoriasContainer) {

        categoriasContainer.innerHTML =
            categorias.map(categoria => `
                <button
                    class="category-card ${categoria === "Todos" ? "active" : ""}"
                    data-category="${categoria}"
                    onclick="filtrarPorCategoria('${categoria}')"
                >

                    <span class="category-icon">
                        ${iconoCategoria(categoria)}
                    </span>

                    <strong>
                        ${categoria}
                    </strong>

                    <small>
                        ${contarProductos(categoria)} productos
                    </small>

                </button>
            `).join("");
    }

    if (filtrosContainer) {

        filtrosContainer.innerHTML =
            categorias.map(categoria => `
                <button
                    class="filter-button ${categoria === "Todos" ? "active" : ""}"
                    data-category="${categoria}"
                    onclick="filtrarPorCategoria('${categoria}')"
                >
                    ${categoria}
                </button>
            `).join("");
    }
}


/* ============================================================
   FILTRAR POR CATEGORÍA
============================================================ */

function filtrarPorCategoria(categoria) {

    categoriaActual = categoria;

    document
        .querySelectorAll("[data-category]")
        .forEach(elemento => {

            if (
                elemento.classList.contains("category-card") ||
                elemento.classList.contains("filter-button")
            ) {

                elemento.classList.toggle(
                    "active",
                    elemento.dataset.category === categoria
                );

            }

        });

    aplicarFiltros();

    // Desplazamiento suave hacia los productos
    const seccionProductos =
        document.querySelector("#productos") ||
        document.querySelector(".products-section");

    if (seccionProductos) {

        setTimeout(() => {

            seccionProductos.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }
}


/* ============================================================
   CONTAR PRODUCTOS
============================================================ */

function contarProductos(categoria) {

    if (categoria === "Todos") {
        return productos.length;
    }

    return productos.filter(
        producto => producto.categoria === categoria
    ).length;
}


/* ============================================================
   ICONOS DE CATEGORÍAS
============================================================ */

function iconoCategoria(categoria) {

    const iconos = {

        "Todos": "🛒",

        "Herramientas": "🔧",

        "Construcción": "🏗️",

        "Electricidad": "⚡",

        "Iluminación": "💡",

        "Baño": "🚿",

        "Pinturas": "🎨",

        "Jardinería": "🌱"

    };

    return iconos[categoria] || "📦";
}


/* ============================================================
   CONTADOR
============================================================ */

function actualizarContador(cantidad) {

    if (!contadorProductos) return;

    contadorProductos.innerHTML =
        `${cantidad} producto${cantidad !== 1 ? "s" : ""}`;
}


/* ============================================================
   ANIMACIONES DE PRODUCTOS
============================================================ */

function activarAnimacionesProductos() {

    const cards =
        document.querySelectorAll(".product-card");

    if (!cards.length) return;

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";

        setTimeout(() => {

            card.style.transition =
                "opacity .5s ease, transform .5s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 70);

    });
}


/* ============================================================
   BOTÓN WHATSAPP FLOTANTE
============================================================ */

function configurarWhatsApp() {

    const botones =
        document.querySelectorAll(
            "[data-whatsapp], .whatsapp-button, .floating-whatsapp"
        );

    botones.forEach(boton => {

        boton.addEventListener("click", function(event) {

            event.preventDefault();

            abrirWhatsApp();

        });

    });
}


/* ============================================================
   BUSCADOR CON RETRASO
   Evita hacer demasiadas búsquedas mientras se escribe.
============================================================ */

let timeoutBusqueda;

function configurarBuscador() {

    if (!buscador) return;

    buscador.addEventListener("input", () => {

        clearTimeout(timeoutBusqueda);

        timeoutBusqueda = setTimeout(() => {

            buscarProductos();

        }, 200);

    });

}


/* ============================================================
   ANIMACIÓN AL HACER SCROLL
============================================================ */

function configurarAnimacionesScroll() {

    const elementos =
        document.querySelectorAll(
            ".section-header, " +
            ".category-card, " +
            ".product-card, " +
            ".benefit, " +
            ".promo-content, " +
            ".contact-card"
        );

    if (!elementos.length) return;

    if (!("IntersectionObserver" in window)) {

        elementos.forEach(elemento => {
            elemento.classList.add("visible");
        });

        return;
    }

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    elementos.forEach(elemento => {

        observer.observe(elemento);

    });
}


/* ============================================================
   EFECTO PARALLAX SUAVE
============================================================ */

function configurarParallax() {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;

    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;

            if (scroll < 700) {

                hero.style.backgroundPosition =
                    `center ${scroll * 0.15}px`;

            }

        },
        { passive: true }
    );
}


/* ============================================================
   BOTÓN VOLVER ARRIBA
============================================================ */

function configurarVolverArriba() {

    let boton =
        document.querySelector("#backToTop");

    if (!boton) {

        boton =
            document.createElement("button");

        boton.id = "backToTop";

        boton.innerHTML = "↑";

        boton.setAttribute(
            "aria-label",
            "Volver arriba"
        );

        document.body.appendChild(boton);

    }

    boton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                boton.classList.add("show");

            } else {

                boton.classList.remove("show");

            }

        },
        { passive: true }
    );
}


/* ============================================================
   LAZY LOAD
============================================================ */

function configurarLazyImages() {

    const imagenes =
        document.querySelectorAll("img[data-src]");

    if (!imagenes.length) return;

    if (!("IntersectionObserver" in window)) {

        imagenes.forEach(img => {

            img.src =
                img.dataset.src;

        });

        return;
    }

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const img =
                            entry.target;

                        img.src =
                            img.dataset.src;

                        observer.unobserve(img);

                    }

                });

            }
        );

    imagenes.forEach(img => {

        observer.observe(img);

    });
}


/* ============================================================
   AÑO AUTOMÁTICO DEL FOOTER
============================================================ */

function configurarAnio() {

    const elementos =
        document.querySelectorAll(
            "[data-year]"
        );

    elementos.forEach(elemento => {

        elemento.textContent =
            new Date().getFullYear();

    });
}


/* ============================================================
   INICIALIZACIÓN
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "🔥 Ferretería San Francisco - catálogo iniciado"
        );

        console.log(
            `📦 ${productos.length} productos cargados`
        );

        // Crear categorías
        crearCategorias();

        // Mostrar productos
        mostrarProductos(productos);

        // Buscador
        configurarBuscador();

        // WhatsApp
        configurarWhatsApp();

        // Animaciones
        configurarAnimacionesScroll();

        // Parallax
        configurarParallax();

        // Botón volver arriba
        configurarVolverArriba();

        // Lazy loading
        configurarLazyImages();

        // Año automático
        configurarAnio();

    }
);


/* ============================================================
   HACER FUNCIONES DISPONIBLES PARA HTML
============================================================ */

window.abrirWhatsApp =
    abrirWhatsApp;

window.abrirWhatsAppPorId =
    abrirWhatsAppPorId;

window.filtrarPorCategoria =
    filtrarPorCategoria;

window.buscarProductos =
    buscarProductos;