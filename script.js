
const WHATSAPP_NUMBER = "595972537313";

const WA_ICON = `
<svg class="wa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .23 5.31.23 11.84c0 2.09.55 4.13 1.59 5.93L.12 24l6.39-1.67a11.82 11.82 0 0 0 5.57 1.41h.01c6.52 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.14-3.41-8.42ZM12.09 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.84 9.84 0 0 1-1.51-5.2C2.19 6.4 6.62 1.98 12.08 1.98c2.64 0 5.12 1.03 6.98 2.89a9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.42 9.84-9.87 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
</svg>
`;

const CATEGORY_ICONS = {

    tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3 6.3 14.7a2 2 0 0 0 0 2.8l.2.2a2 2 0 0 0 2.8 0l8.4-8.4M17.7 3.3l3 3-3 3-3-3 3-3ZM4 20l3-3"/></svg>`,

    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-9 12h6l-1 8 9-13h-6l1-7Z"/></svg>`,

    drop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2S5 9.2 5 14a7 7 0 0 0 14 0c0-4.8-7-12-7-12Z"/></svg>`,

    paint: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h16v5H4V3Zm4 5v11h8V8"/></svg>`,

    brick: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="8" height="5"/><rect x="13" y="4" width="8" height="5"/><rect x="3" y="11" width="5" height="5"/><rect x="10" y="11" width="11" height="5"/><rect x="3" y="18" width="8" height="3"/><rect x="13" y="18" width="8" height="3"/></svg>`,

    leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 3.5C11 3.8 5.5 6.4 4 11c-.9 2.8.3 5.5 3.1 6.4 2.1.7 4.1-.2 5.2-1.8-1.7.6-3.5.4-4.8-.6 1.5-.2 3.3-.8 4.8-1.9 1.7-1.2 3.1-3 4.1-5.3-1.2 1.4-2.7 2.5-4.4 3.2 2-1.7 3.2-3.8 3.5-6.5Z"/></svg>`
};

const CATEGORIES = [
    { id: "todos", name: "Todos", description: "Ver catálogo", icon: "tool" },
    { id: "herramientas", name: "Herramientas", description: "Trabajo y taller", icon: "tool" },
    { id: "electricidad", name: "Electricidad", description: "Instalación y energía", icon: "bolt" },
    { id: "plomeria", name: "Plomería", description: "Conexiones y agua", icon: "drop" },
    { id: "pinturas", name: "Pinturas", description: "Color y protección", icon: "paint" },
    { id: "construccion", name: "Construcción", description: "Obra y materiales", icon: "brick" },
    { id: "jardin", name: "Jardín", description: "Riego y mantenimiento", icon: "leaf" }
];

const PRODUCTS = [
    { id: 1, nombre: "Amoladora a Batería", categoria: "herramientas", categoriaNombre: "Herramientas", imagen: "imagenes/Amoladora a bateria.jpeg", descripcion: "Herramienta práctica para trabajos de corte y desbaste.", precio: "Consultar", destacado: true },
    { id: 2, nombre: "Caño Corrugado", categoria: "electricidad", categoriaNombre: "Electricidad", imagen: "imagenes/Caño corrugado.jpeg", descripcion: "Caño corrugado para instalaciones eléctricas.", precio: "Consultar", destacado: true },
    { id: 3, nombre: "Cerámica 60x60", categoria: "construccion", categoriaNombre: "Construcción", imagen: "imagenes/Ceramica 60x60.jpeg", descripcion: "Cerámica para revestimiento de ambientes.", precio: "Consultar", destacado: true },
    { id: 4, nombre: "Chapa Acanalada", categoria: "construccion", categoriaNombre: "Construcción", imagen: "imagenes/Chapa acanalada.jpeg", descripcion: "Chapa acanalada para diferentes proyectos de construcción.", precio: "Consultar", destacado: true },
    { id: 5, nombre: "Claucol", categoria: "construccion", categoriaNombre: "Construcción", imagen: "imagenes/Claucol.jpeg", descripcion: "Producto para trabajos de construcción.", precio: "Consultar", destacado: false },
    { id: 6, nombre: "Cubrelux Amanecer", categoria: "pinturas", categoriaNombre: "Pinturas", imagen: "imagenes/Cubrelux_amanecer.jpeg", descripcion: "Producto para terminación y protección.", precio: "Consultar", destacado: false },
    { id: 7, nombre: "Duchas Lorenzetti", categoria: "plomeria", categoriaNombre: "Plomería", imagen: "imagenes/Duchas lorenzetti.jpeg", descripcion: "Duchas para instalaciones del hogar.", precio: "Consultar", destacado: true },
    { id: 8, nombre: "Engrapadora 3 en 1", categoria: "herramientas", categoriaNombre: "Herramientas", imagen: "imagenes/Engrapadora 3en1.jpeg", descripcion: "Engrapadora versátil para diferentes trabajos.", precio: "Consultar", destacado: false },
    { id: 9, nombre: "Fichas y Enchufes", categoria: "electricidad", categoriaNombre: "Electricidad", imagen: "imagenes/Fichas_enchufes.jpeg", descripcion: "Accesorios para instalaciones eléctricas.", precio: "Consultar", destacado: true },
    { id: 10, nombre: "Foco LED 100W Dilux", categoria: "electricidad", categoriaNombre: "Electricidad", imagen: "imagenes/Foco led 100w_dilux.jpeg", descripcion: "Iluminación LED de alta potencia.", precio: "Consultar", destacado: true },
    { id: 11, nombre: "Focos LED Electron", categoria: "electricidad", categoriaNombre: "Electricidad", imagen: "imagenes/Focos led_electron.jpeg", descripcion: "Focos LED para iluminación del hogar.", precio: "Consultar", destacado: false },
    { id: 12, nombre: "Grifos", categoria: "plomeria", categoriaNombre: "Plomería", imagen: "imagenes/Grifos.jpeg", descripcion: "Grifería para instalaciones y renovación.", precio: "Consultar", destacado: false },
    { id: 13, nombre: "Juego de Llaves Combinadas Tramontina", categoria: "herramientas", categoriaNombre: "Herramientas", imagen: "imagenes/Juego de llaves combinados_tramontina.jpeg", descripcion: "Juego de llaves para trabajos de mantenimiento.", precio: "Consultar", destacado: true },
    { id: 14, nombre: "Llave Combinada 10mm Tramontina", categoria: "herramientas", categoriaNombre: "Herramientas", imagen: "imagenes/Llave combinada 10mm_tramontina.jpeg", descripcion: "Llave combinada para trabajos de precisión.", precio: "Consultar", destacado: false },
    { id: 15, nombre: "Llave de Impacto Tramontina", categoria: "herramientas", categoriaNombre: "Herramientas", imagen: "imagenes/Llave impacto_tramontina.jpeg", descripcion: "Herramienta para trabajos de ajuste y montaje.", precio: "Consultar", destacado: true },
    { id: 16, nombre: "Maletín de Herramientas", categoria: "herramientas", categoriaNombre: "Herramientas", imagen: "imagenes/Maletin de herramientas.jpeg", descripcion: "Maletín práctico para organizar herramientas.", precio: "Consultar", destacado: true },
    { id: 17, nombre: "Manguera para Jardín", categoria: "jardin", categoriaNombre: "Jardín", imagen: "imagenes/Manguera jardin.jpeg", descripcion: "Manguera para riego y mantenimiento.", precio: "Consultar", destacado: false },
    { id: 18, nombre: "Opalatex 20 Litros", categoria: "pinturas", categoriaNombre: "Pinturas", imagen: "imagenes/Opalatex 20lts.jpeg", descripcion: "Pintura para trabajos de renovación.", precio: "Consultar", destacado: true },
    { id: 19, nombre: "Opalatex", categoria: "pinturas", categoriaNombre: "Pinturas", imagen: "imagenes/Opalatex.jpeg", descripcion: "Pintura para diferentes superficies.", precio: "Consultar", destacado: false },
    { id: 20, nombre: "Pincel Dragon", categoria: "pinturas", categoriaNombre: "Pinturas", imagen: "imagenes/Pincel_dragon.jpeg", descripcion: "Pincel para trabajos de pintura y terminación.", precio: "Consultar", destacado: false },
    { id: 21, nombre: "Placa Electrónica", categoria: "electricidad", categoriaNombre: "Electricidad", imagen: "imagenes/Placa electron.jpeg", descripcion: "Placa electrónica para aplicaciones y reparación.", precio: "Consultar", destacado: false }
];

let categoriaActual = "todos";
let busquedaActual = "";

const productsGrid = document.getElementById("productsGrid");
const categoriesContainer = document.getElementById("categories");
const filtersContainer = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const backToTop = document.getElementById("backToTop");

const cartBtn = document.getElementById("cartBtn");
const cartBadge = document.getElementById("cartBadge");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartItemsContainer = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartFooter = document.getElementById("cartFooter");
const cartTotalCount = document.getElementById("cartTotalCount");
const cartSendBtn = document.getElementById("cartSendBtn");
const cartClearBtn = document.getElementById("cartClearBtn");
const toastContainer = document.getElementById("toastContainer");

const cartConfirm = document.getElementById("cartConfirm");
const cartConfirmText = document.getElementById("cartConfirmText");
const cartConfirmSubtext = document.getElementById("cartConfirmSubtext");
const cartConfirmSendBtn = document.getElementById("cartConfirmSendBtn");
const cartConfirmContinueBtn = document.getElementById("cartConfirmContinueBtn");
const cartConfirmCloseBtn = document.getElementById("cartConfirmCloseBtn");

const CATEGORIA_SIN_CARRITO = "construccion";

const CART_STORAGE_KEY = "sanfrancisco_carrito";

let carrito = cargarCarritoGuardado();

function cargarCarritoGuardado() {

    try {
        const guardado = localStorage.getItem(CART_STORAGE_KEY);
        return guardado ? JSON.parse(guardado) : [];
    } catch (error) {
        return [];
    }

}

function guardarCarrito() {

    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(carrito));
    } catch (error) {
    
    }

}

function esElegibleParaCarrito(producto) {
    return producto.categoria !== CATEGORIA_SIN_CARRITO;
}

function agregarAlCarrito(id) {

    const producto = PRODUCTS.find(item => item.id === id);
    if (!producto || !esElegibleParaCarrito(producto)) return;

    const item = carrito.find(entry => entry.id === id);

    if (item) {
        item.cantidad += 1;
    } else {
        carrito.push({ id: id, cantidad: 1 });
    }

    guardarCarrito();
    renderCarrito();
    mostrarConfirmacionCarrito(producto);

    cartBadge.classList.remove("bump");
    void cartBadge.offsetWidth; 
    cartBadge.classList.add("bump");

}

function cambiarCantidad(id, delta) {

    const item = carrito.find(entry => entry.id === id);
    if (!item) return;

    item.cantidad += delta;

    if (item.cantidad <= 0) {
        carrito = carrito.filter(entry => entry.id !== id);
    }

    guardarCarrito();
    renderCarrito();

}

function quitarDelCarrito(id) {

    carrito = carrito.filter(entry => entry.id !== id);
    guardarCarrito();
    renderCarrito();

}

function vaciarCarrito() {

    carrito = [];
    guardarCarrito();
    renderCarrito();
    cerrarCarrito();

}

function getCantidadTotalCarrito() {
    return carrito.reduce((total, entry) => total + entry.cantidad, 0);
}

function crearItemCarritoHTML(entry) {

    const producto = PRODUCTS.find(item => item.id === entry.id);
    if (!producto) return "";

    return `
        <div class="cart-item flex items-center gap-3 border-b border-slate-100 py-3.5 last:border-0">

            <div class="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-zinc-50 p-1.5">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="h-full w-full object-contain"
                    onerror="this.onerror=null;this.src='${IMG_FALLBACK}';">
            </div>

            <div class="min-w-0 flex-1">
                <p class="truncate font-display text-[13.5px] font-bold text-ink">${producto.nombre}</p>
                <p class="text-[12px] text-slate-400">${producto.categoriaNombre}</p>
            </div>

            <div class="flex shrink-0 items-center gap-2">
                <button class="grid h-7 w-7 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-accent/40 hover:text-accent active:scale-90" onclick="cambiarCantidad(${producto.id}, -1)" aria-label="Restar uno">−</button>
                <span class="w-4 text-center font-display text-[13px] font-bold text-ink">${entry.cantidad}</span>
                <button class="grid h-7 w-7 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-accent/40 hover:text-accent active:scale-90" onclick="cambiarCantidad(${producto.id}, 1)" aria-label="Sumar uno">+</button>
            </div>

            <button class="shrink-0 text-slate-300 transition hover:text-red-500" onclick="quitarDelCarrito(${producto.id})" aria-label="Quitar ${producto.nombre}">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>

        </div>
    `;

}

function renderCarrito() {

    const cantidad = getCantidadTotalCarrito();

    // Badge del header
    if (cantidad > 0) {
        cartBadge.textContent = cantidad > 99 ? "99+" : String(cantidad);
        cartBadge.classList.remove("hidden");
    } else {
        cartBadge.classList.add("hidden");
    }
    
    document.querySelectorAll("[data-cart-add]").forEach(button => {

        const id = Number(button.dataset.cartAdd);
        const enCarrito = carrito.find(entry => entry.id === id);

        button.querySelector(".cart-add-label").textContent = enCarrito
            ? `En el pedido (${enCarrito.cantidad})`
            : "Agregar al carrito";

    });

    // Panel del carrito
    if (carrito.length === 0) {

        cartItemsContainer.innerHTML = "";
        cartItemsContainer.classList.add("hidden");
        cartFooter.classList.add("hidden");
        cartEmpty.classList.remove("hidden");
        cartEmpty.classList.add("flex");

    } else {

        cartEmpty.classList.add("hidden");
        cartEmpty.classList.remove("flex");
        cartItemsContainer.classList.remove("hidden");
        cartFooter.classList.remove("hidden");

        cartItemsContainer.innerHTML = carrito.map(crearItemCarritoHTML).join("");
        cartTotalCount.textContent = cantidad;

    }

}

function abrirCarrito() {
    ocultarConfirmacionCarrito();
    cartOverlay.classList.add("open");
    cartDrawer.classList.add("open");
    document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
    cartOverlay.classList.remove("open");
    cartDrawer.classList.remove("open");
    document.body.style.overflow = "";
}

function enviarPedidoWhatsApp() {

    if (carrito.length === 0) return;

    const lineas = carrito.map(entry => {
        const producto = PRODUCTS.find(item => item.id === entry.id);
        return producto ? `• ${entry.cantidad}x ${producto.nombre}` : "";
    }).filter(Boolean).join("\n");

    const mensaje = `Hola, quiero encargar los siguientes productos para retirar:\n\n${lineas}\n\n¿Me confirman disponibilidad?`;

    abrirWhatsApp(mensaje);

}

function mostrarToast(texto) {

    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast pointer-events-auto flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-white shadow-xl";
    toast.innerHTML = `
        <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>
        <span>${texto}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => toast.remove(), 2600);

}

let cartConfirmTimeout = null;

function mostrarConfirmacionCarrito(producto) {

    if (!cartConfirm) return;

    const cantidad = getCantidadTotalCarrito();

    cartConfirmText.textContent = `${producto.nombre} se agregó`;
    cartConfirmSubtext.textContent = cantidad === 1
        ? "Tenés 1 producto en tu pedido."
        : `Tenés ${cantidad} productos en tu pedido.`;

    cartConfirm.classList.add("open");

    clearTimeout(cartConfirmTimeout);
    cartConfirmTimeout = setTimeout(ocultarConfirmacionCarrito, 7000);

}

function ocultarConfirmacionCarrito() {

    if (!cartConfirm) return;

    cartConfirm.classList.remove("open");
    clearTimeout(cartConfirmTimeout);

}

function iniciarConfirmacionCarrito() {

    if (cartConfirmSendBtn) {
        cartConfirmSendBtn.addEventListener("click", function() {
            ocultarConfirmacionCarrito();
            enviarPedidoWhatsApp();
        });
    }

    if (cartConfirmContinueBtn) {
        cartConfirmContinueBtn.addEventListener("click", ocultarConfirmacionCarrito);
    }

    if (cartConfirmCloseBtn) {
        cartConfirmCloseBtn.addEventListener("click", ocultarConfirmacionCarrito);
    }

}

function iniciarEventosCarrito() {

    if (cartBtn) cartBtn.addEventListener("click", abrirCarrito);
    if (cartCloseBtn) cartCloseBtn.addEventListener("click", cerrarCarrito);
    if (cartOverlay) cartOverlay.addEventListener("click", cerrarCarrito);
    if (cartSendBtn) cartSendBtn.addEventListener("click", enviarPedidoWhatsApp);
    if (cartClearBtn) cartClearBtn.addEventListener("click", vaciarCarrito);

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") cerrarCarrito();
    });

}

function renderCategories() {

    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = CATEGORIES.map(category => {

        const activa = categoriaActual === category.id;

        const cardClasses = activa
            ? "category-card group flex flex-col items-center gap-2 rounded-2xl border border-accent bg-accent p-4 text-center shadow-lg shadow-accent/25 cursor-pointer transition-all duration-300 hover:-translate-y-1 active:scale-95"
            : "category-card group flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg active:scale-95";

        const iconClasses = activa
            ? "grid h-9 w-9 place-items-center rounded-xl bg-white/20 text-white transition-transform duration-300 group-hover:scale-110 [&_svg]:h-[18px] [&_svg]:w-[18px]"
            : "grid h-9 w-9 place-items-center rounded-xl bg-accent-light text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 [&_svg]:h-[18px] [&_svg]:w-[18px]";

        const titleClasses = activa
            ? "font-display text-[13px] font-bold text-white"
            : "font-display text-[13px] font-bold text-ink";

        const descClasses = activa
            ? "text-[11px] text-white/80"
            : "text-[11px] text-slate-400";

        return `
            <article class="${cardClasses}" data-category="${category.id}">
                <div class="${iconClasses}">${CATEGORY_ICONS[category.icon] || CATEGORY_ICONS.tool}</div>
                <strong class="${titleClasses}">${category.name}</strong>
                <small class="${descClasses}">${category.description}</small>
            </article>
        `;

    }).join("");

}

function renderFilters() {

    if (!filtersContainer) return;

    filtersContainer.innerHTML = CATEGORIES.map(category => {

        const activo = categoriaActual === category.id;

        const classes = activo
            ? "filter-button rounded-full border border-accent bg-accent px-4 py-2 font-display text-[13px] font-semibold text-white shadow-md shadow-accent/25 transition-all duration-300 hover:scale-105 active:scale-95"
            : "filter-button rounded-full border border-slate-200 bg-white px-4 py-2 font-display text-[13px] font-semibold text-slate-600 transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:text-ink active:scale-95";

        return `<button class="${classes}" data-filter="${category.id}">${category.name}</button>`;

    }).join("");

}

function getFilteredProducts() {

    return PRODUCTS.filter(producto => {

        const coincideCategoria =
            categoriaActual === "todos" || producto.categoria === categoriaActual;

        const texto = `${producto.nombre} ${producto.descripcion} ${producto.categoriaNombre}`.toLowerCase();
        const coincideBusqueda = texto.includes(busquedaActual.toLowerCase());

        return coincideCategoria && coincideBusqueda;

    });

}

const IMG_FALLBACK =
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22 viewBox=%220 0 600 400%22%3E%3Crect width=%22600%22 height=%22400%22 fill=%22%23f4f4f5%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23a1a1aa%22 font-family=%22Arial%22 font-size=%2222%22%3EImagen no disponible%3C/text%3E%3C/svg%3E";

function crearProductoHTML(producto) {

    const destacadoBadge = producto.destacado
        ? `<span class="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">Destacado</span>`
        : "";

    return `
        <article class="product-card group reveal relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl" data-product-id="${producto.id}">

            <div class="relative h-64 overflow-hidden bg-zinc-50 p-6">

                <div class="absolute left-3 top-3 z-10 flex flex-col items-start gap-1.5">
                    <span class="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                        Disponible
                    </span>
                    ${destacadoBadge}
                </div>

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                    class="h-full w-full object-contain"
                    onload="this.classList.add('loaded');"
                    onerror="this.onerror=null;this.src='${IMG_FALLBACK}';this.classList.add('loaded');"
                >
            </div>

            <div class="flex flex-1 flex-col p-5">

                <span class="text-[11px] font-bold uppercase tracking-wide text-accent">${producto.categoriaNombre}</span>
                <h3 class="mt-1.5 font-display text-[16px] font-bold leading-snug text-ink">${producto.nombre}</h3>
                <p class="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-slate-500">${producto.descripcion}</p>

                <div class="mt-4 flex items-center justify-between">
                    <span class="text-[13px] font-semibold text-slate-400">${producto.precio}</span>
                </div>

                ${esElegibleParaCarrito(producto) ? `
                <div class="mt-3 flex items-center gap-2">
                    <button
                        class="product-btn flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 font-display text-[13px] font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-accent hover:shadow-lg hover:shadow-accent/25 active:scale-95"
                        data-cart-add="${producto.id}"
                        onclick="agregarAlCarrito(${producto.id})"
                        aria-label="Agregar ${producto.nombre} al carrito"
                    >
                        <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
                        <span class="cart-add-label">Agregar al carrito</span>
                    </button>

                    <button
                        class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 text-slate-500 transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:text-emerald-600 active:scale-95"
                        onclick="abrirWhatsAppPorId(${producto.id})"
                        aria-label="Consultar ${producto.nombre} por WhatsApp"
                    >
                        <span class="[&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-current">${WA_ICON}</span>
                    </button>
                </div>
                ` : `
                <button
                    class="product-btn mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 font-display text-[13.5px] font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-accent hover:shadow-lg hover:shadow-accent/25 active:scale-95"
                    onclick="abrirWhatsAppPorId(${producto.id})"
                    aria-label="Consultar ${producto.nombre} por WhatsApp"
                >
                    <span class="[&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-current">${WA_ICON}</span>
                    <span>Consultar por WhatsApp</span>
                </button>
                `}

            </div>

        </article>
    `;

}

function renderProducts() {

    if (!productsGrid) return;

    const productos = getFilteredProducts();

    if (productos.length === 0) {

        productsGrid.innerHTML = "";

        if (emptyState) {
            emptyState.classList.remove("hidden");
            emptyState.classList.add("flex");
        }

        return;
    }

    if (emptyState) {
        emptyState.classList.add("hidden");
        emptyState.classList.remove("flex");
    }

    productsGrid.innerHTML = productos.map(crearProductoHTML).join("");

    activarAnimaciones();
    renderCarrito();

}

function cambiarCategoria(categoria) {

    categoriaActual = categoria;

    renderCategories();
    renderFilters();
    renderProducts();

    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth", block: "start" });

}

document.addEventListener("click", function(event) {

    const category = event.target.closest("[data-category]");
    const filter = event.target.closest("[data-filter]");

    if (category) cambiarCategoria(category.dataset.category);
    if (filter) cambiarCategoria(filter.dataset.filter);

});

if (searchInput) {

    searchInput.addEventListener("input", function(event) {

        busquedaActual = event.target.value.trim();
        renderProducts();

    });

}

function crearURLWhatsApp(mensaje) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

function abrirWhatsApp(mensaje) {

    if (!WHATSAPP_NUMBER) {
        alert("Primero colocá tu número real de WhatsApp en script.js.");
        return;
    }

    window.open(crearURLWhatsApp(mensaje), "_blank");

}

function abrirWhatsAppPorId(id) {

    const producto = PRODUCTS.find(item => item.id === id);
    if (!producto) return;

    const mensaje = `Hola, me interesa saber el precio y disponibilidad de ${producto.nombre}`;
    abrirWhatsApp(mensaje);

}

function prepararBotonesWhatsApp() {

    document.querySelectorAll("[data-whatsapp]").forEach(button => {

        button.addEventListener("click", function(event) {

            event.preventDefault();
            abrirWhatsApp("Hola, quiero consultar por algunos productos de Ferretería San Francisco. ¿Me pueden ayudar?");

        });

    });

}

function cargarIconosWhatsApp() {

    document.querySelectorAll(".wa-icon-container").forEach(container => {
        container.innerHTML = WA_ICON;
    });

}

if (menuBtn && mobileNav) {

    menuBtn.addEventListener("click", function() {
        mobileNav.classList.toggle("active");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function() {
            mobileNav.classList.remove("active");
        });
    });

}

window.addEventListener("scroll", function() {

    if (!backToTop) return;

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

if (backToTop) {

    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

}

function activarAnimaciones() {

    const elementos = document.querySelectorAll(".reveal:not(.visible)");

    if (!("IntersectionObserver" in window)) {
        elementos.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(function(entries, obs) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }

        });

    }, { threshold: 0.12 });

    elementos.forEach(element => observer.observe(element));

}

const HERO_WORDS = ["tu proyecto.", "tu obra.", "tu hogar.", "tu taller."];

function iniciarPalabraRotativa() {

    const el = document.getElementById("wordRotator");
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    const span = el.querySelector("span");

    setInterval(function() {

        span.classList.add("switching");

        setTimeout(function() {
            index = (index + 1) % HERO_WORDS.length;
            span.textContent = HERO_WORDS[index];
            span.classList.remove("switching");
        }, 350);

    }, 2800);

}

function iniciarMarquesina() {

    const track = document.getElementById("marqueeTrack");
    if (!track) return;

    const pill = category => `
        <span class="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12.5px] font-medium text-slate-300">
            <span class="[&_svg]:h-3.5 [&_svg]:w-3.5 text-accent">${CATEGORY_ICONS[category.icon] || CATEGORY_ICONS.tool}</span>
            ${category.name}
        </span>
    `;

    const items = CATEGORIES.filter(category => category.id !== "todos").map(pill).join("");

    const sinAnimacion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (sinAnimacion) {
        // Sin animación: se muestra una sola fila, sin duplicar contenido
        track.innerHTML = items;
        track.style.animation = "none";
    } else {
        // Se duplica el contenido para lograr un loop continuo sin salto visual
        track.innerHTML = items + items;
    }

}

function iniciarTiltCard() {

    const card = document.getElementById("tiltCard");
    if (!card) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // se omite en touch

    card.addEventListener("mousemove", function(event) {

        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;

    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });

}

function iniciarPagina() {

    renderCategories();
    renderFilters();
    renderProducts();
    prepararBotonesWhatsApp();
    cargarIconosWhatsApp();
    activarAnimaciones();
    iniciarPalabraRotativa();
    iniciarMarquesina();
    iniciarTiltCard();
    iniciarEventosCarrito();
    iniciarConfirmacionCarrito();
    renderCarrito();

}

document.addEventListener("DOMContentLoaded", iniciarPagina);