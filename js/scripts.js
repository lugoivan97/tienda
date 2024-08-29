const productos = [
    {nombre: 'Auricular Bluetooth M10', descripcion: 'Auricular Inalámbrico', precio: 15000, img: './img/auricularbluethootm10v5.3.jpg'},
    {nombre: 'Auricular Bluetooth F9', descripcion: 'Auricular Inalámbrico Táctil', precio: 12000, img: './img/auricularbluethoottwsf9.jpg'},
    {nombre: 'Auricular Bluetooth F9 Plus', descripcion: 'Auricular Inalámbrico Táctil', precio: 17000, img: './img/auricularbluethoottwsf9plus.jpg'},
    {nombre: 'Auriculares Cat P47', descripcion: 'Auriculares Bluetooth Vincha', precio: 10000, img: './img/auricularcatp47.jpg'},
    {nombre: 'Auricular E6S', descripcion: 'Auriculares Inalámbrico con botón', precio: 12000, img: './img/auriculare6sconvisor.jpg'},
    {nombre: 'Auriculares Noga Btwins 35', descripcion: 'Auriculares Tranparentes Inalámbricos', precio: 28000, img: './img/auricularinalambricobgbtwins35transparente.jpg'},
    {nombre: 'Auricular Bluetooth Biza', descripcion: 'Auricular Inalámbrico', precio: 18000, img: './img/auricularinalambricobizanetmak.jpg'},
    {nombre: 'Auricular Bluetooth Fan Pro F10 Plus', descripcion: 'Auricular Inalámbrico Táctil', precio: 18000, img: './img/auricularinalambricofanprof10-plus.jpg'},
    {nombre: 'Auricular Bluetooth Noga 12', descripcion: 'Auricular Inalámbrico', precio: 26000, img: './img/auricularinalambriconogabtwins12.jpg'},
    {nombre: 'Auriculares P47', descripcion: 'Auriculares Inalámbricos Vincha', precio: 9000, img: './img/auricularinalambricop47.jpg'},
    {nombre: 'Auriculares P9', descripcion: 'Auriculares Bluetooth Vincha', precio: 18000, img: './img/auricularinalambricop9plusmax.jpg'},
    {nombre: 'Auriculares Kosmo M10', descripcion: 'Auriculares Inalámbricos', precio: 20000, img: './img/auricularkosmobluethootm10ksm.jpg'},
    {nombre: 'Auriculares Net Pod', descripcion: 'Auricular Inalámbrico', precio: 25000, img: './img/auricularnetmaknm-netpod.jpg'},
    {nombre: 'Auricular Bluetooth A100', descripcion: 'Auricular Inalámbrico Vincha', precio: 40000, img: './img/auricularnogavinchang-a100bt.jpg'},
    {nombre: 'Auricular Samsung Tipo C', descripcion: 'Auricular Cable', precio: 7000, img: './img/auricularsamsungfichatipoc.jpg'},
    {nombre: 'Auriculares Soul Ficha Lightning', descripcion: 'Auriculares Ficha Iphone', precio: 14500, img: './img/auricularsoulfichalightning.jpg'},
    {nombre: 'Calculadora Científica KK-82ms', descripcion: 'Calculadora Científica', precio: 6400, img: './img/calculadoracientificakk-82ms-d.jpg'},
    {nombre: 'Calculadora Dexin KK-1048b', descripcion: 'Calculadora', precio: 10000, img: './img/calculadoradexinkk-1048b.jpg'},
    {nombre: 'Calculadora Electronica KK-837b', descripcion: 'Calculadora Electronica', precio: 5000, img: './img/calculadoraelectronicakk-837b.jpg'},
    {nombre: 'Camaras Oryx Set x 8', descripcion: 'Camaras CCTV HD', precio: 280000, img: './img/camaraahdoryxsetx8cctvhd.jpg'},
    {nombre: 'Camara Foco Panoramica', descripcion: 'Camara Wifi', precio: 40000, img: './img/camarafocopanoramica360conwifi.jpg'},
    {nombre: 'Camara GTC Inalámbrica', descripcion: 'Camaras Wifi', precio: 57000, img: './img/camaragtcautomaticainalambricawac-001.jpg'},
    {nombre: 'Combo Noga NKB-413', descripcion: 'Combo 4 en 1', precio: 42000, img: './img/combonoga4en1nkb-413.jpg'},
    {nombre: 'Consola HBL Gam-06', descripcion: 'Consola Retro', precio: 36000, img: './img/consolahbltech-gam06.jpg'},
    {nombre: 'Consola Retro Stick', descripcion: 'Consola Retro 10000 Juegos', precio: 82000, img: './img/consolaretrostick4k10000juegos.jpg'},
    {nombre: 'Joystick Inalámbrico Netmak', descripcion: 'Joystick P/ Cel/PC/PS4/PS3', precio: 42000, img: './img/joystickinalambricoparacelularps4ps3pcnetmak-dange.jpg'},
    {nombre: 'Joystick PS4', descripcion: 'Joystick Inalámbrico Negro', precio: 52000, img: './img/joystickps4inalambriconegro.jpg'},
    {nombre: 'Mouse Soul OMW 200', descripcion: 'Mouse Inalámbrico', precio: 15000, img: './img/mouseinalambricosoulofficeomw200.jpg'},
    {nombre: 'Mouse Netmak Recargable', descripcion: 'Mouse Inalámbrico', precio: 32000, img: './img/mousenetmakinalambricorecargable.jpg'},
    {nombre: 'Mouse Soul Office OM100', descripcion: 'Mouse con Cable', precio: 8500, img: './img/mousesoulofficeom100.jpg'},
    {nombre: 'Power Bank HB1 POW 01', descripcion: 'Cargador Portatil 7000mah', precio: 20000, img: './img/powebankhbl-pow01.jpg'},
    {nombre: 'Power Bank HB1 POW02', descripcion: 'Bateria Portatil 20000mah', precio: 34000, img: './img/powerbankhbl-pow02.jpg'},
    {nombre: 'Power Bank Netmak', descripcion: 'Bateria Portatil', precio: 32000, img: './img/powerbanknetmaknm-pb3.jpg'},
    {nombre: 'Power Bank Soul M9500', descripcion: 'Bateria Portatil', precio: 48000, img: './img/powerbanksoul-m95000.jpg'},
    {nombre: 'Power Bank Soul Dual', descripcion: 'Bateria Portatil', precio: 61000, img: './img/powerbanksouldual.jpg'},
    {nombre: 'Power Bank Soul Dual 5000mah', descripcion: 'Bateria Portatil', precio: 45000, img: './img/powerbanksouldual5000mah.jpg'},
    {nombre: 'Power Bank Soul QI', descripcion: 'Bateria Portatil Carga Inalámbrica', precio: 41000, img: './img/powerbanksoulqicargainalambrica.jpg'},
    {nombre: 'Reloj AS9 Ultra', descripcion: 'SmartWatch', precio: 31000, img: './img/relojsmartwatchas9ultra.jpg'},
    {nombre: 'Reloj HB1 Sm010', descripcion: 'SmartWatch', precio: 32000, img: './img/relojsmartwatchhbl-sm010.jpg'},
    {nombre: 'Reloj Noga SW09', descripcion: 'SmartWatch', precio: 17000, img: './img/relojsmartwatchnogasw09.jpg'},
    {nombre: 'Auricular Noga 24', descripcion: 'Auricular Inalámbrico', precio: 31000, img: './img/auricularbtwinsnoga24.jpg'},
    {nombre: 'Auricular Noga 24 Oro', descripcion: 'Auricular Inalámbrico', precio: 31000, img: './img/auricularbtwinsnoga24oro.jpg'},
    {nombre: 'Auricular Noga 24 Rojo', descripcion: 'Auricular Inalámbrico', precio: 31000, img: './img/auricularbtwinsnoga24rojo.jpg'},
    {nombre: 'Auricular Panda Ng-25', descripcion: 'Auriculares Inálambrico', precio: 25000, img: './img/auricularbtwinsnoga25panda.jpg'},
    {nombre: 'Auricular Noga 26', descripcion: 'Auriculares Inalámbrico', precio: 31000, img: './img/auricularbtwinsnoga26.jpg'},
    {nombre: 'Auriculares Noga Btwins 28 Pro', descripcion: 'Auriculares Inálambrico', precio: 34000, img: './img/auricularbtwinsnoga28pro.jpg'},
    {nombre: 'Auricular Noga 29', descripcion: 'Auricular Inalámbrico', precio: 38000, img: './img/auricularbtwinsnoga29.jpg'},
    {nombre: 'Auricular Noga 30 Pelota de Selección', descripcion: 'Auricular Inálambrico', precio: 25000, img: './img/auricularbtwinsnoga30pelotadelaseleccion.jpg'},
    {nombre: 'Auricular Candy Spark Daewoo', descripcion: 'Auricular Inalámbrico Gold', precio: 25000, img: './img/auricularcandysparkdaewogold.jpg'},
    {nombre: 'Auricular Noga Inear BT-300', descripcion: 'Auriculares Inalámbricos BT-300', precio: 12000, img: './img/auricularnogainearbluethootbt-300.jpg'},
    {nombre: 'Auriculares Vincha Premium NG-A208', descripcion: 'Auriculares Bluetooth NG-A208', precio: 22000, img: './img/auricularnogavinchaarisng1208btpremium.jpg'},
    {nombre: 'Auriculares Noga A50', descripcion: 'Auriculares Noga Premium', precio: 49000, img: './img/auricularnogavinchang-a50btpremium.jpg'},
    {nombre: 'Auriculares Noga Vincha', descripcion: 'Auricular Premium', precio: 29000, img: './img/auricularnogavinchapremiumng918btrojo.jpg'},
    {nombre: 'Balanza De Baño', descripcion: 'Balanza Digital hasta 180kg', precio: 21000, img: './img/balanzabañopersonal180kg.jpg'},
    {nombre: 'Balanza Bluetooth', descripcion: 'Balanza con App Fitness', precio: 42000, img: './img/balanzapersonalbtappfitnesssuono.jpg'},
    {nombre: 'Batidor de Café', descripcion: 'Batidor/Espumador', precio: 3600, img: './img/batidordecafe.jpg'},
    {nombre: 'Botella Sport', descripcion: 'Botella Acero Inox', precio: 24000, img: './img/botelladeaceroinoxsport.jpg'},
    {nombre: 'Botella de Silicona', descripcion: 'Botella Plegable', precio: 14000, img: './img/botellaplegable.jpg'},
    {nombre: 'Botella Cantimplora Infantil', descripcion: 'Botella 500cc', precio: 27000, img: './img/botellatermocantimplora500ccinfantil.jpg'},
    {nombre: 'Botella Cantimplora Infantil con Sensor de Temperatura', descripcion: 'Botella con sensor de temp', precio: 32000, img: './img/botellatermocantimplora500ccinfantilconsensor.jpg'},
    {nombre: 'Botella Cantimplora Infantil Tipo Termo', descripcion: 'Botella tipo Termo', precio: 27000, img: './img/botellatermocantimplora500ccinfantilgrandeconvisor.jpg'},
    {nombre: 'Consola Noga 8bits 2 Joysticks', descripcion: 'Consola 2 Joysticks', precio: 34000, img: './img/consolajuegos8bits2joysticksng-fg02noga.jpg'},
    {nombre: 'Consola Sup', descripcion: 'Consola con Control', precio: 26000, img: './img/consolajuegossupconcontrol.jpg'},
    {nombre: 'Cortadora de Pelo', descripcion: 'Cortapelo patillera', precio: 24000, img: './img/cortapelopatilleraacc0062.jpg'},
    {nombre: 'Exprimidora Electrica', descripcion: 'Exprimidora Suono', precio: 29000, img: './img/exprimidorelectricosuono.jpg'},
    {nombre: 'Humificador de Ambiente', descripcion: 'Humificador Jarrón', precio: 18000, img: './img/humificadordeambientejarron.jpg'},
    {nombre: 'Humificador de Estrellas', descripcion: 'Humificador Proyector de Estrellas', precio: 22000, img: './img/humificadorproyectorestrellas.jpg'},
    {nombre: 'Lampara con Parlante', descripcion: 'Foco RGB', precio: 11000, img: './img/lamparafocoparlantergb.jpg'},
    {nombre: 'Lampara Giratoria doble', descripcion: 'Lampara Oryx Doble', precio: 7000, img: './img/lamparagiratoriadobleoryx.jpg'},
    {nombre: 'Lampara RGB', descripcion: 'Foco control remoto', precio: 7000, img: './img/lamparargbcontrol.jpg'},
    {nombre: 'Licuadora Portatil', descripcion: 'Licuadora Carga USB', precio: 35000, img: './img/licuadoraconcargausb.jpg'},
    {nombre: 'Licuadora ORYX', descripcion: 'Licuadora con Molinillo', precio: 60000, img: './img/licuadoraconmolinillooryx.jpg'},
    {nombre: 'Licuadora Portatil', descripcion: 'Licuadora Recargable', precio: 28000, img: './img/licuadoraportatilcargausb.jpg'},
    {nombre: 'Linterna Minera', descripcion: 'Linterna Vincha Recargable', precio: 20000, img: './img/linternaminera5ledvincha.jpg'},
    {nombre: 'Masajeador Cervical', descripcion: 'Masajeador Suono', precio: 60000, img: './img/masajeadorcervicalsuono.jpg'},
    {nombre: 'Monopatin ORYX', descripcion: 'Monopatin hasta 90kg', precio: 66000, img: './img/monopatinoryx90kg.jpg'},
    {nombre: 'Monopatin Oryx Basic', descripcion: 'Monopatin para niños', precio: 55000, img: './img/monopatinoryxbasic.jpg'},
    {nombre: 'Mopa Spray', descripcion: 'Mopa Suono', precio: 21000, img: './img/mopaspraysuono.jpg'},
    {nombre: 'Mopa Trapeador', descripcion: 'Mopa redonda', precio: 37000, img: './img/mopatrapeadorredondo.jpg'},
    {nombre: 'Parlante Radio', descripcion: 'Parlante Radio Retro', precio: 33000, img: './img/paralanteradiominiretrosuono.jpg'},
    {nombre: 'Pava Electrica Transparente', descripcion: 'Pava Electrica', precio: 54000, img: './img/pavaelectricaoryxtransparente.jpg'},
    {nombre: 'Pinza Amperométrica Noga', descripcion: 'Pinza Noga', precio: 20000, img: './img/pinzaamperometricanoga.jpg'},
    {nombre: 'Pinza Crimpeadora Noga', descripcion: 'Pinza Noga', precio: 12000, img: './img/pinzacrimpeadoranetmak.jpg'},
    {nombre: 'Pizarra Mágica 8.5', descripcion: 'Pizarra 8.5"', precio: 7000, img: './img/pizarramagicaautomaticablanca8,5.jpg'},
    {nombre: 'Proyector Astronauta', descripcion: 'Proyector Oryx', precio: 66000, img: './img/proyectorastronautaprocontroloryx.jpg'},
    {nombre: 'SmartWatch Netmak Pro', descripcion: 'Reloj Inteligente Netmak', precio: 21000, img: './img/smartwatchnetmaknmpro.jpg'},
    {nombre: 'SmartWatch Noga SW-11', descripcion: 'Reloj Inteligente Plateado', precio: 68000, img: './img/smartwatchnogangsw11metalplateado.jpg'},
    {nombre: 'Termo Stanley 1,2L', descripcion: 'Termo 3 sellos', precio: 52000, img: './img/termostanleyacerotressellos1,2litros.jpg'},
    {nombre: 'Tester Digital Netmak', descripcion: 'Tester Netmak', precio: 28000, img: './img/testerdigitalnetmaknm890g.jpg'},
    {nombre: 'Velador Baymax', descripcion: 'Velador Infantil', precio: 17000, img: './img/veladorinfantilbaymax.jpg'},
    {nombre: 'Velador Conejo', descripcion: 'Velador Infantil', precio: 10000, img: './img/veladorinfantilconejo.jpg'},
    {nombre: 'Velador Luna RGB', descripcion: 'Velador con control', precio: 36000, img: './img/veladorlunargb15cmconcontrolremoto.jpg'},
    {nombre: 'Velador Oso Led', descripcion: 'Velador Infantil', precio: 21000, img: './img/veladorosoled.jpg'},
    {nombre: 'Velador Panda y Sapo', descripcion: 'Velador Infantil', precio: 12000, img: './img/veladorpandaysapo.jpg'},
    {nombre: 'Web Cam Full HD', descripcion: 'Web Cam Pocket', precio: 27000, img: './img/webcampocketfullhd.jpg'},
    {nombre: 'Adaptador Tipo C a Miniplug', descripcion: 'Adaptador Netmark', precio: 7000, img:'./img/adaptadortipocaminiplugnmtc55.jpg'},
    {nombre: 'Pava Electrica Netmak 1,8L', descripcion: 'Pava con corte para mate', precio: 35000, img:'./img/pavaelectricanetmak1,8lcortemate.jpg"'},
    {nombre: 'Aro de Luz 8cm', descripcion: 'Aro de Luz Recargable', precio: 2500, img:'./img/aroluz8cmrecargable.jpg"'},
    {nombre: 'Maquina de Burbujas', descripcion: 'Bubble Machine', precio: 26000, img:'./img/bubblemachine.jpg"'},
    {nombre: 'Consola Game Box Sup Pro', descripcion: 'Consola Game 900 en 1', precio: 40000, img:'./img/consolagamebocm3suppro.jpg"'},
    {nombre: 'Impresora Mini', descripcion: 'Mini Impresora Portatil', precio: 45000, img:'./img/impresoraminiportatil.jpg"'},
    {nombre: 'Lampara Velador Astronauta', descripcion: 'Lampara Recargable', precio: 12000, img:'./img/lamparaveladorastronautarecargable.jpg"'},
    {nombre: 'Raqueta Killer Trap', descripcion: 'Raqueta con linterna', precio: 15000, img:'./img/raquetakillertrap.jpg"'},
    {nombre: 'Termo Stanley + 3 Tazas', descripcion: 'Termo 500cc', precio: 32000, img:'./img/termostanley+3tazas500cc.jpg"'},
    {nombre: 'Auricular Fan Pro Plus', descripcion: 'Auricular Inalámbrico', precio: 20000, img:'./img/auricularinalambricofanprof10flus.jpg"'},
    {nombre: 'Auricular Soul S389', descripcion: 'Auricular con cable', precio: 5600, img:'./img/auricularsouls389.jpg"'},
    {nombre: 'Camara Domo', descripcion: 'Camara Hyotshy', precio: 60000, img:'./img/camaradomohytoshy.jpg"'},
    {nombre: 'Mini Parlante Soul', descripcion: 'Parlante Karaoke', precio: 25000, img:'./img/miniparlantesoulkaraoke.jpg"'},
    {nombre: 'Power Bank Iphone', descripcion: 'Bateria Portatil Iman', precio: 40000, img:'./img/powerbankbatteryiphone.jpg"'},
    {nombre: 'Proyector 360', descripcion: 'Proyector Astronauta', precio: 50000, img:'./img/proyectorastronauta360.jpg"'},
    {nombre: 'SmartWatch W26', descripcion: 'Reloj Inteligente', precio: 25000, img:'./img/relojsmartwatchw26.jpg"'},
    {nombre: 'Vaso Termico', descripcion: 'Vaso Acero Inox', precio: 20000, img:'./img/vasotermicoaceroinox.jpg"'},
    {nombre: 'Vaso Termico Parlante', descripcion: 'Vaso Cervezero', precio: 25000, img:'./img/vasotermicoconparlante.jpg"'},
    {nombre: 'Auricular Vincha Suono', descripcion: 'Auricular Inalámbrico RGB', precio: 42000, img:'./img/12135k.jpg"'},
    {nombre: 'Velador Proyector', descripcion: 'Proyector Galaxia 360°', precio: 32000, img:'./img/12133k.jpg"'},
    {nombre: 'Teclado Mecanico Netmak', descripcion: 'NM-Dominate 60%', precio: 57000, img:'./img/12040k.jpg"'},
    {nombre: 'Teclado Mecanico Netmak', descripcion: 'NM-Skill 80%', precio: 55000, img:'./img/12044k.jpg"'},
    {nombre: 'Combo Teclado y Mouse Gamer', descripcion: 'Teclas Redondas NM-Vortex', precio: 23000, img:'./img/12046k.jpg"'},
    {nombre: 'Auricular Vincha Inalámbrico', descripcion: 'NM-Live Netmak', precio: 29000, img:'./img/12119k.jpg"'},
    {nombre: 'Auricular Gamer Netmak', descripcion: 'Inalámbrico NM-35', precio: 85000, img:'./img/12120k.jpg"'},
    {nombre: 'Mouse Gamer Netmak', descripcion: 'NM-Expert Netmak', precio: 9200, img:'./img/12125k.jpg"'},
    {nombre: 'Aro de Luz RGB Oryx', descripcion: '26cm + Tripode 2.10 mts', precio: 40000, img:'./img/10794k.jpg"'},
    {nombre: 'SmartWatch Netmak', descripcion: 'Reloj Inteligente NM-Plus', precio: 39000, img:'./img/10888k.jpg"'},
    {nombre: 'Cargador Iphone AAA', descripcion: 'Cargador + Cable 20W Tipo C', precio: 18000, img:'./img/11449k.jpg"'},
    {nombre: 'Auricular Inear Ibek', descripcion: 'Auricular con cable', precio: 2600, img:'./img/11663k.jpg"'},
    {nombre: 'Set de Ollas Oryx', descripcion: 'Ollas de Ceramica 3 Piezas ', precio: 25000, img:'./img/11822k.jpg"'},
    {nombre: 'Luz led', descripcion: 'Luz led para bombillas', precio: 5900, img:'./img/12098k.jpg"'},
    {nombre: 'Joystick PS3 Camuflado', descripcion: 'Joystick Estampado', precio: 29000, img:'./img/12138k.jpg"'},
    {nombre: 'Pop It Electronico', descripcion: 'Pop It', precio: 12000, img:'./img/12139k.jpg"'},
    {nombre: 'Limpiavidrios', descripcion: 'Limpiavidrio Magnetico', precio: 16000, img:'./img/12141k.jpg"'},
    {nombre: 'Soporte Stream Netmak', descripcion: 'Incluye Microfono y Luz', precio: 32000, img:'./img/11390k.jpg"'},
    {nombre: 'Mouse Netmak Inalámbrico', descripcion: 'NM-M680 Netmak', precio: 12000, img:'./img/11865k.jpg"'},
    {nombre: 'Mouse Vertical Netmak', descripcion: 'Modelo Ergonomico', precio: 30000, img:'./img/11885k.jpg"'},
    {nombre: 'SmartWatch Netmak', descripcion: 'Reloj Inteligente NM-Action', precio: 40000, img:'./img/12048k.jpg"'},
    {nombre: 'Teclado Recargable BT 5.0', descripcion: 'Ranura para tablet', precio: 44000, img:'./img/12126K.jpg"'},
    {nombre: 'Teclado y Mouse Netmak', descripcion: 'NM-KB850', precio: 33000, img:'./img/12127k.jpg"'},
    {nombre: 'Termo Food Jar', descripcion: '1,2 Lts', precio: 50000, img:'./img/12084k.jpg"'},
    {nombre: 'Zapatilla Alargue', descripcion: '4USB + 4 Enchufes', precio: 14000, img:'./img/12088k.jpg"'},
    {nombre: 'Cargador Tipo C', descripcion: 'Cargador + Cable', precio: 9000, img:'./img/12089k.jpg"'},
    {nombre: 'Termo mate acero', descripcion: '750cc Mate Listo', precio: 35000, img:'./img/11191k.jpg"'},
    

];


let carrito = [];


function ordenarProductosPorNombre() {
    productos.sort((a, b) => {
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
        return 0;
    });
}
ordenarProductosPorNombre();

function displayProductos(productos) {
    const grilla = document.getElementById('producto-grilla');
    grilla.innerHTML = '';

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        const productoEnCarrito = carrito.find(p => p.nombre === producto.nombre);
        const cantidad = productoEnCarrito ? productoEnCarrito.cantidad : 0;

        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
            <p>${producto.descripcion}</p>
            <p class="precios">$${producto.precio}</p>
            <div class="boton-carrito">
                ${cantidad > 0 ? `
                <button onclick="cambiarCantidad('${producto.nombre}', -1)">-</button>
                <span>${cantidad}</span>
                <button onclick="cambiarCantidad('${producto.nombre}', 1)">+</button>
                ` : `<button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>`}
            </div>
        `;
        grilla.appendChild(div);
    });
}


function buscarProducto() {
    const input = document.getElementById('buscador').value.toLowerCase();
    const productosFiltrados = productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(input) || 
               producto.descripcion.toLowerCase().includes(input);
    });
    displayProductos(productosFiltrados);
}


function agregarAlCarrito(nombre, precio) {
    const producto = carrito.find(p => p.nombre === nombre);
    if (producto) {
        producto.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
    displayProductos(productos);
}


function cambiarCantidad(nombre, delta) {
    const producto = carrito.find(p => p.nombre === nombre);
    if (producto) {
        producto.cantidad += delta;
        if (producto.cantidad <= 0) {
            eliminarDelCarrito(producto);
        }
    }
    actualizarCarrito();
    displayProductos(productos); 
}
function eliminarDelCarrito(producto) {
    carrito = carrito.filter(p => p.nombre !== producto.nombre);
    actualizarCarrito();
    displayProductos(productos);
}


function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}
function enviarPorWhatsApp() {
    const numero = '5493484698036';
    const mensaje = carrito.map(producto => `- ${producto.nombre}: $${producto.precio} (x${producto.cantidad})`).join('\n');
    const total = carrito.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(`Hola, me gustaría comprar los siguientes productos:\n${mensaje}\nTotal: $${total}`)}`;
    window.open(url, '_blank');
}

function actualizarCarrito() {
    const carritoList = document.getElementById('carrito-list');
    carritoList.innerHTML = '';
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${producto.nombre} - $${producto.precio} x ${producto.cantidad}
            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(carrito[${index}])">Eliminar</button>`;
        carritoList.appendChild(li);
    });

    const carritoCount = document.getElementById('carrito-count');
    carritoCount.textContent = carrito.length;
}
document.getElementById('btn-scroll-top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
displayProductos(productos);
