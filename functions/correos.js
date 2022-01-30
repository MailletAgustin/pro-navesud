const nodemailer = require("nodemailer");
const sensible = require("../sensible.json");
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "hola@navesud.com.ar",
    pass: sensible.mailPass,
  },
});

function controlCorreos(data, db) {
    db.Usuario.findOne({ sessionToken: data.sessionToken }, (err, doc) => {
        if (doc) {
            if (data.paso == 2) {aproboPaso1(doc.email, doc.name)}
            if (data.paso == 3) {aproboPaso2(doc.email, doc.name)}
            if (data.paso == 4) {aproboPaso3(doc.email, doc.name)}
            if (data.paso == 5) {aproboCurso(doc.email, doc.name)}
        }
    });
}

function registroExitoso(para, nombre, usuario, clave) {
  html = `
    <h1>¡Bienvenido ${nombre}, al Curso de Conductor Náutico PASO A PASO de NAVESUD!</h1>
    <p style="font-size: 14pt; font-weight: bold">Creemos profundamente que la náutica segura es calidad de vida y genera bienestar, y por eso nos embarcamos en este proyecto educativo que esperamos lo disfrutes.</p>
    <h2 style="color: #0b5ed7;">LAS VECES QUE QUIERAS,</h2>
    <p style="font-size: 14pt;">Podes ver los videos de las clases y hacer las autoevaluaciones (incluso después de aprobadas).</p>
    <h2 style="color: #0b5ed7;">40 DÍAS,</h2>
    <p style="font-size: 14pt;">Es el tiempo máximo que tenés para hacer este curso.</p>
    <h2 style="color: #0b5ed7;">APUNTES,</h2>
    <p style="font-size: 14pt;">Hay uno para cada PASO dentro del curso. Descárgalos y estúdialos. Hay información que no está en los videos y luego te lo pueden tomar en el examen.</p>
    <h2 style="color: #0b5ed7;">RENDIR PARA EL EXAMEN,</h2>
    <p style="font-size: 14pt;">Podes rendir en cualquier Prefectura Naval Argentina del País que esté tomando exámenes, o bien con nosotros y el Club Náutico Colón <a href="https://navesud.com.ar/cursos/conductor-nautico/calendario"> (ver Mesas de Examen dentro del Curso) </a></p>
    <h2 style="color: #0b5ed7;">SI LLEGARAS A TENER ALGUN INCONVENIENTE TÉCNICO,</h2>
    <p style="font-size: 14pt;">Escribinos a soporte@navesud.com.ar o whatsapp a 3447460883</p>
    <h2 style="color: #0b5ed7;">REVISA TU CORREO ELECTRONICO,</h2>
    <p style="font-size: 14pt;">Al iniciar Paso 2, Paso 3, y cuando inicies y termines las autoevaluaciones finales te enviaremos información muy importante. Así que estate atento y revisa tu correo.</p>
    <h1 style="color: #0b5ed7;">¡Ya mismo podes empezar!</h1>
    <p style="font-size: 14pt;">Para acceder a la plataforma, ingresá a este link: <a href="https://navesud.com.ar/cursos/conductor-nautico/">https://navesud.com.ar/cursos/conductor-nautico/</a> con tu usuario: <span style="color: #0b5ed7;"> ${usuario} </span> y contraseña: <span style="color: #0b5ed7;"> ${clave} </span></p>
    <h3>Navegante, a Navegar!!</h3>
    <p>Que estés muy bien, atentamente</p>
    <p>Hugo Ugartemendía, coordinador NAVESUD Escuela Náutica</p>
    <img src="https://navesud.com.ar/img/navesud-logo.png">
    `;

  // Armar el correo
  let mailoptions = {
    from: '"NAVESUD" <hola@navesud.com.ar>',
    to: para,
    subject: "¡Registro exitoso! - Bienvenido, " + nombre,
    html: html,
  };

  // Enviar email luego de definir las opciones y el transporter
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailoptions, (error, info) => {
      if (error) {
        console.log("#3 ¡No se pudo enviar el email!");
        reject(error);
      } else {
        console.log("#3 Mensaje enviado a " + info.response);
        resolve(info.response);
      }
    });
  });
}

function aproboPaso1(email, nombre) {
  html = `
  <h1>Hola, ${nombre}. ¡FELICITACIONES! APROBASTE EL PASO 1.</h1>
  <h2 style="color: #0b5ed7">
    INSCRIBITE CON TIEMPO PARA RENDIR PARA EL CARNET:
  </h2>
  <p style="font-size: 14pt">
    Si rendís directamente en tu Prefectura más cercana, llama antes a Prefectura
    y averigua por fechas de inscripción.
  </p>
  <p style="font-size: 14pt">Si rendís con nosotros:</p>
  <ul>
    <li>
      <p>
        Podes inscribirte en cualquier momento, hasta 10 días antes de la fecha de
        examen. (Se cierra inscripción 10 dias antes de la fecha de examen)
      </p>
    </li>
    <li>
      <p>
        Es condicional que tengas sí o sí APROBADO este CURSO ONLINE a más tardar
        el día anterior al examen. Sino no se te permitirá rendir.
      </p>
    </li>
    <li>
      <p>
        El curso online toma en total aproximadamente 15 horas, así que organízate
        para inscribirte a la mesa, solo si estás seguro que lo vas a terminar a
        tiempo. Los cupos son limitados, y sino le estarías quitando la
        posibilidad de rendir a otro navegante.
      </p>
    </li>
  </ul>
  <h2 style="color: #0b5ed7">¿NECESITAS AYUDA?</h2>
  <p style="font-size: 14pt">
    Estamos para eso. Comunícate al lugar indicado para recibir una asistencia
    rápida y eficiente.
  </p>
  <ul>
    <li style="color: #0b5ed7; font-size: 16pt">Consultas académicas:</li>
    <p style="font-size: 14pt">
      Por conceptos que no te hayan quedado claro en las clases, envíanos un email
      o un whatsapp. academica@navesud.com.ar +5491155733560
    </p>
    <li style="color: #0b5ed7; font-size: 16pt">Consultas administrativas:</li>
    <p style="font-size: 14pt">
      Por pagos, mesas de examen, requisitos para rendir, si no podés entrar al
      curso, problemas con claves o usuarios, u otras consultas generales,
      envíanos un email o un whatsapp. hola@navesud.com.ar +54 93447437748
    </p>
    <li style="color: #0b5ed7; font-size: 16pt">Soporte técnico:</li>
    <p style="font-size: 14pt">
      Si se te traba y no podés pasar a la clase siguiente, no se pueden ver los
      videos, u otra cuestión técnica, envíanos un email o whatsapp.
      soporte@navesud.com.ar +54 93447467166
    </p>
  </ul>
  <h2 style="color: #0b5ed7">¿QUÉ TE PARECIÓ EL PASO 1?</h2>
  <p style="font-size: 14pt">
    Por favor contestanos esta breve encuesta
    <a href="https://forms.gle/QJX1YQyGyc8iFavY8">(hace clic acá)</a>. Nos
    ayudarás mucho a mejorar.
  </p>
  <h3>Navegante, a Navegar!!</h3>
  <p>Que estés muy bien, atentamente</p>
  <p>Hugo Ugartemendía, coordinador NAVESUD Escuela Náutica</p>
  <img src="https://navesud.com.ar/img/navesud-logo.png" />  
    `;
    let mailoptions = {
        from: '"NAVESUD" <hola@navesud.com.ar>',
        to: email,
        subject: 'Seguimos avanzando, ' + nombre + ' - ¡Felicidades!',
        html: html
    };

    return new Promise(
        (resolve, reject) => {
            transporter.sendMail(mailoptions, (error, info) => {
                if (error) {
                    console.log('#3 ¡No se pudo enviar el email a ' + nombre + '[' + email + ']' );
                    reject(error);
                } else {
                    console.log('#3 Mensaje enviado a ' + info.response);
                    resolve(info.response);
                }
            });
        }
    )
}

function aproboPaso2(email, nombre) {
    html = `
    <h1>HOLA NAVEGANTE ${nombre}. ¡QUE ALEGRÍA QUE YA HAYAS APROBADO EL PASO 2!</h1>
    <h2 style="color: #0b5ed7; font-size: 16pt;">PRACTICA LAS MANIOBRAS:</h2>
    <p style="font-size: 14pt;">Es muy importante que domines la embarcación. En el Paso 3 se ven más maniobras que debes dominar además de los nudos, adujar y lanzar cabos que ya viste. Debes realizar las prácticas por tu cuenta. Asegúrate de salir con alguien con Carnet y documentación en regla.</p>
    <p style="font-size: 14pt;">No te presentes a rendir si no cuentas con experiencia práctica.</p>
    <p style="font-size: 14pt;">En caso necesites un instructor, escribinos y te facilitamos contacto de quienes realizan clases especiales de práctica a hola@navesud.com.ar o al +5493447437748</p>
    <h2 style="color: #0b5ed7; font-size: 16pt;">¿TE SALEN TODOS LOS NUDOS MARINEROS?</h2>
    <p style="font-size: 14pt;">Podes volver las veces que quieras al Paso 1 y ver los videos de los nudos y cualquier otro tema que desees repasar. Tenes que dominarlos muy bien, incluso con los ojos cerrados (simulando que es de noche). Serán evaluados en examen presencial cuando te presentes a rendir.</p>
    <h2 style="color: #0b5ed7; font-size: 16pt;">RECORDA BAJAR LOS APUNTES DEL CURSO:</h2>
    <p style="font-size: 14pt;">Hay uno para cada PASO dentro del curso. Descárgalos y estúdialos. Hay información que no está en los videos y luego te lo pueden tomar en el examen.</p>
    <h2 style="color: #0b5ed7; font-size: 16pt;">¿QUÉ TE PARECIÓ EL PASO 2?</h2>
    <p style="font-size: 14pt;">Te pedimos contestes esta encuesta <a href="https://forms.gle/kVNv4z9QYRoi7XR67"> (clic acá) </a>. Muchas gracias!!</p>
    <h3>Navegante, a Navegar!!</h3>
    <p>Que estés muy bien, atentamente</p>
    <p>Hugo Ugartemendía, coordinador NAVESUD Escuela Náutica</p>
    <img src="https://navesud.com.ar/img/navesud-logo.png">    
    `;
      let mailoptions = {
          from: '"NAVESUD" <hola@navesud.com.ar>',
          to: email,
          subject: 'Seguimos avanzando, ' + nombre + ' - ¡Felicidades!',
          html: html
      };
  
      return new Promise(
          (resolve, reject) => {
              transporter.sendMail(mailoptions, (error, info) => {
                  if (error) {
                      console.log('#3 ¡No se pudo enviar el email a ' + nombre + '[' + email + ']' );
                      reject(error);
                  } else {
                      console.log('#3 Mensaje enviado a ' + info.response);
                      resolve(info.response);
                  }
              });
          }
      )
}

function aproboPaso3(email, nombre) {
    html = `
    <h1>${nombre} APROBASTE EL PASO 3. ¡¡QUE BUENA NOTICIA!!</h1>
    <h2 style="color: #0b5ed7; font-size: 16pt;">ANDA GANANDO TIEMPO:</h2>
    <p style="font-size: 14pt;">Prepara la documentación para tramitar el carnet. En particular Certificado Médico, Foto carnet (no es válida otra foto), y los formularios que se indican. Anda a MESAS de EXAMEN dentro del curso, allí está toda la información.</p>
    <h2 style="color: #0b5ed7; font-size: 16pt;">MANIOBRAS A MOTOR, que pueden ser evaluadas en examen práctico presencial:</h2>
    <ul>
        <li style="font-size: 14pt;">VIRAR UNA BOYA</li>
        <li style="font-size: 14pt;">APROXIMARSE Y AMARRARSE A UNA BOYA</li>
        <li style="font-size: 14pt;">CONDUCIR MARCHA ATRÁS</li>
        <li style="font-size: 14pt;">FONDEAR / ANCLAR</li>
        <li style="font-size: 14pt;">LLEGAR A LA COSTA / MUELLE / RAMPA</li>
        <li style="font-size: 14pt;">MANIOBRAS HOMBRE AL AGUA</li>
    </ul>
    <p style="font-size: 14pt;">Podes volver a ver los videos las veces que quieras hasta que expire el plazo del curso online.</p>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">¿CUÁNDO ME PUEDO INSCRIBIR PARA RENDIR EXAMEN PRESENCIAL?</h2>
    <p style="font-size: 14pt;">Si vas a rendir con nosotros, una vez apruebes las siguientes dos autoevaluaciones que están en solapa que dice FINAL, a continuación del PASO 3:</p>
    <ul>
        <li style="font-size: 14pt;">PREGUNTAS DE EXAMEN ASIGNATURA SEGURIDAD</li>
        <li style="font-size: 14pt;">PREGUNTAS DE EXAMEN ASIGNATURA LEGISLACION Y REGLAMENTACIÓN</li>
    </ul>
    <p style="font-size: 14pt;">Pero, si rendís con Prefectura comunicate con ellos <a href="https://www.argentina.gob.ar/prefecturanaval/guia-dependencias-dnau"> (haciendo clic acá)</a></p>
    <h2 style="color: #0b5ed7; font-size: 16pt;">¿QUÉ TE PARECIÓ EL PASO 3?</h2>
    <p style="font-size: 14pt;">Contestanos esta encuesta corta, <a href="https://forms.gle/ES4qWSpUC4M8YRZF9"> (clic acá)</a> y nos ayudas a seguir mejorando. Muchas gracias.</p>
    
    <h3>Navegante, a Navegar!!</h3>
    <p>Que estés muy bien, atentamente.</p>
    <p>Hugo Ugartemendía, coordinador NAVESUD Escuela Náutica</p>
    <img src="https://navesud.com.ar/img/navesud-logo.png"> 
    `;
      let mailoptions = {
          from: '"NAVESUD" <hola@navesud.com.ar>',
          to: email,
          subject: 'Seguimos avanzando, ' + nombre + ' - ¡Felicidades!',
          html: html
      };
  
      return new Promise(
          (resolve, reject) => {
              transporter.sendMail(mailoptions, (error, info) => {
                  if (error) {
                      console.log('#3 ¡No se pudo enviar el email a ' + nombre + '[' + email + ']' );
                      reject(error);
                  } else {
                      console.log('#3 Mensaje enviado a ' + info.response);
                      resolve(info.response);
                  }
              });
          }
      )
}

function aproboCurso(email, nombre) {
    html = `
    <h1>¡FELICITACIONES ${nombre}! </h1>
    <h1> APROBASTE EL CURSO TEÓRICO PREPARATORIO DE CONDUCTOR NÁUTICO PASO A PASO DE NAVESUD!</h1>
    <p style="color: #0b5ed7; font-weight: bold;">YA TE PODÉS INSCRIBIR PARA RENDIR EXAMEN PRESENCIAL (Teórico y Práctico), para OBTENER EL CARNET</p>
    <h2 style="color: #0b5ed7; font-size: 16pt;">Mesas de Examen</h2>
    <p style="font-size: 14pt;">Por favor, lee detenidamente estos 6 puntos:</p>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">Punto 1: Tenes dos opciones:</h2>
    <ul>
        <li style="font-size: 14pt;">Opción 1: Podes rendir con el Club Náutico Colón Entre Ríos y nosotros, costo $1500 pesos que se pagan el día de examen. Incluye seguro y derecho de examen.</li>
        <li style="font-size: 14pt;">Opción 2: Podes sino rendir sin costo adicional en cualquier fecha que habilite y evalué Prefectura Naval Argentina en sus dependencias en Argentina; hace clic en el siguiente link para consultar a tu Prefectura más cercana. <a href="https://www.argentina.gob.ar/prefecturanaval/guia-dependencias-dnau">  https://www.argentina.gob.ar/prefecturanaval/guia-dependencias-dnau </a></li>
    </ul>
    <p style="font-size: 14pt;">Sentite tranquilo y seguro para rendir libre por tu cuenta. ¡Estás muy bien formado!</p>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">Requisitos</h2>
    <ul>
        <li style="font-size: 14pt;">Ser mayor de 18 años.</li>
        <li style="font-size: 14pt;">DNI original y FOTOCOPIA.</li>
        <li style="font-size: 14pt;">Constancia de CUIL.</li>
        <li style="font-size: 14pt;">CERTIFICADO MEDICO de puño y letra que diga. “Aptitud psicofísica y audiovisual compatibles con el ejercicio de la navegación”. Se debe especificar Nombre y Apellido, DNI, Grupo Sanguíneo y Factor del examinado, lugar y fecha. (válido por 90 días a partir de la fecha de extensión). Firma y sello aclaratorio del médico interviniente.</li>
        <li style="font-size: 14pt;">2 FOTOS 3,5cm x 3,5cm de frente, fondo celeste (sin anteojos, salvo que sean recetados)</li>
        <li style="font-size: 14pt;">Un correo electrónico (que uses frecuentemente o de un familiar)</li>
        <li style="font-size: 14pt;">Costo $ 2.308,28 (monto lo determina Prefectura, puede variar). una vez presentas los papeles, te envían de PNA por email boleta para que pagues.</li>
        <li style="font-size: 14pt;">Acta de examen</li>
    </ul>
    <p style="font-size: 14pt; font-weight: bold;">EN CASO OPTES POR OPCION 1: (rendir con Club Náutico Colón y nosotros) lee los siguientes puntos:</p>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">Punto 2: Inscribite a mesa de examen</h2>
    <p style="font-size: 14pt;">DEBES INSCRIBIRTE en la mesa de examen disponible que desees rendir.</p>
    <p style="font-size: 14pt; font-weight: bold;">Ten presente que la mesa se cierra cuando se llena el cupo y/o con diez (10) días de anticipación a la fecha prevista de examen, dado que debemos solicitar las autorizaciones para la misma.</p>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">Punto 3: Calendario de examenes</h2>
    <p style="font-size: 14pt;">TENES QUE INGRESAR A LA SECCIÓN DE MESAS DE EXAMEN DENTRO DEL CURSO PARA PODER INSCRIBIRTE. <a href="https://navesud.com.ar/cursos/conductor-nautico/calendario">(haciendo clic acá)</a> </p>
    <p style="font-size: 14pt;">¿Que pasa si llueve? Se suspende por alerta meteorológica o si las condiciones del tiempo ponen en riesgo la seguridad de las personas.</p>
    <p style="font-size: 14pt;">Fechas y horarios sujetos a modificación por clima, covid 19 y/o autorización de Prefectura Naval Argentina.</p>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">Punto 4: Para el día del examen</h2>
    <ul>
        <li style="font-size: 14pt;">Lugar: Palacio de Turismo de Colón (en el Puerto, frente a Prefectura Naval Argentina) Llega 10 minutos antes de tu turno asignado, y espera afuera en la vereda a ser llamado. Mantene siempre distancia social, y saludar sin tocarse.</li>
        <li style="font-size: 14pt;">Llevar para el examen: EMBARCACIÓN PARA RENDIR LA PRÁCTICA , y barbijo, sanitizante (alcohol en gel o amonio cuaternario), DNI, Cabo para hacer nudos, birome y chaleco salvavidas.</li>
        <li style="font-size: 14pt;">Recomendación:  bajar la embarcación luego de que rindas el examen teórico, no antes. (Salvo que tengas quien la cuide). </li>
        <li style="font-size: 14pt;">De la embarcación: Asegurarte de llevar también los elementos de seguridad, y en especial bichero, y salvavidas circular o bidón de 20ltr (aprox) con un cabito atado para hacer hombre al agua.</li>
    </ul>
    <h2 style="color: #0b5ed7; font-size: 16pt;">¿Como será la dinámica del examen?</h2>
    <ul>
        <li style="font-size: 14pt;">1. Cuando se los llama, colocarse alcohol e ir directo al 1er piso. Se Firma acta y abona derecho de examen y seguro.</li>
        <li style="font-size: 14pt;">2. Se rinden dos materias. Son 10 preguntas de cada una. Se aprueba con siete (7). Si no se aprueba se recupera solo la materia que saliste mal en la siguiente fecha (fuerza!! estudia que tienes que andar bien!!)</li>
        <li style="font-size: 14pt;">3. Luego de rendir teórico, se te evaluarán los NUDOS. </li>
        <li style="font-size: 14pt;">4. Finalmente se va a realizar la practica embarcado en la bajada de lancha que está casi pegada al puerto, hacia el norte (calle paso de los Andes). Colocarse alcohol o amonio cuaternario antes de subir de lancha y al bajar.</li>
    </ul>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">Punto 5: Para tramitar el carnet</h2>
    <p style="font-size: 14pt;">Si deseas ganar tiempo, el mismo día del examen podes llevar la siguiente documentación (ver punto 6) para que verifique Prefectura, y luego si aprobas presentarla:</p>
    <ul>
        <li style="font-size: 14pt;"> <span style="font-weight: bold;> Si vivís en el Dpto Colón </span>, podrás ir sin turno a Prefectura el día hábil siguiente al examen para presentar los papeles . Debes indicar el día que rendiste, y que fue con el CLUB NÁUTICO COLÓN Y NAVESUD.</li>
        <li style="font-size: 14pt;"> <span style="font-weight: bold;> Si NO vivís en el Dpto Colón </span>, trae el día del examen todos los papeles solicitados y firmarás delante de los veedores de Prefectura (no antes) y luego seguirán el trámite por email.</li>
    </ul>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">Punto 6: Papeles a presentar</h2>
    <p style="font-size: 14pt; font-weight: bold;">Además de los solicitados en Punto 2 (requisitos), debes llevar impresos dos (2) formularios.</p>
    <ul>
        <li style="font-size: 14pt;">FORMULARIO 1. FICHA INDIVIDUAL <a href="https://hnavesud.com/curso-conductor-nautico/ficha-individual.docx">(DESCARGAR ACÁ)</a></li>
        <li style="font-size: 14pt;">FORMULARIO 2. SOLICITUD DE CERTIFICADO NAUTICO <a href="https://hnavesud.com/curso-conductor-nautico/solicitud-carnet-nautico.docx">(DESCARGAR ACÁ)</a></li>
    </ul>
    <p style="font-size: 14pt; font-weight: bold;">¿Cómo llenar estos formularios?</p>
    <ul>
        <li style="font-size: 14pt;">Completar por computadora en MAYUSCULA</li>
        <li style="font-size: 14pt;">Pegar una foto en cada formulario, en el espacio indicado.</li>
        <li style="font-size: 14pt;">NO firmarlos, se firma delante de la Autoridad de PNA</li>
    </ul>
    <p style="font-size: 14pt;">FORMULARIO 1. La FICHA INDIVIDUAL.</p>
    <ul>
        <li style="font-size: 14pt;">Debes imprimir el formulario en doble faz. En una sola hoja.</li>
        <li style="font-size: 14pt;">Donde dice REJU CLON …… dejar espacio, luego completa PNA</li>
        <li style="font-size: 14pt;">Donde dice Reg. N° N , colocar N2- y tu DNI</li>
    </ul>
    
    <p style="font-size: 14pt;">FORMULARIO 2. SOLICITUD DE CERTIFICADO NAUTICO.</p>
    <ul>
        <li style="font-size: 14pt;">Donde dice “Solicita”: marcar con una X en Obtención, salvo sea una Renovación, en cuyo caso marcar ahí.</li>
        <li style="font-size: 14pt;">Donde dice “Habilitación”: marcar con una X en N2</li>
        <li style="font-size: 14pt;">Donde dice “Examen rendido en”: Colocar CLUB NAUTICO COLON E.R.</li>
    </ul>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">¿Te quedó alguna duda?</h2>
    <p style="font-size: 14pt;">Te pedimos vuelvas a leer nuevamente detenidamente todos los puntos, y si todavía te quedó alguna inquietud entonces escribinos a hola@navesud.com.ar o envianos un whatsapp a +54 93447437748 y con mucho gusto te responderemos.</p>
    
    <h2 style="color: #0b5ed7; font-size: 16pt;">¿QUÉ TE PARECIÓ TODO ESTE CURSO?</h2>
    <p style="font-size: 14pt;">Te agradecemos de corazón puedas hacer la Encuesta Final. <a href="https://forms.gle/8KFaTzdJicUj14867"> (Clic aca) </a> Gracias!!</p>
    
    <h3 style="color: #0b5ed7; font-size: 16pt;">¡¡¡ Que alegría que tenemos, ahora sí un NAVEGANTE SEGURO más !!!</h3>
    
    <h3>Navegante, a Navegar!!</h3>
    <p>Que estés muy bien, atentamente.</p>
    <p>Hugo Ugartemendía, coordinador NAVESUD Escuela Náutica</p>
    <img src="https://navesud.com.ar/img/navesud-logo.png">
    `;
      let mailoptions = {
          from: '"NAVESUD" <hola@navesud.com.ar>',
          to: email,
          subject: 'Seguimos avanzando, ' + nombre + ' - ¡Felicidades!',
          html: html
      };
  
      return new Promise(
          (resolve, reject) => {
              transporter.sendMail(mailoptions, (error, info) => {
                  if (error) {
                      console.log('#3 ¡No se pudo enviar el email a ' + nombre + '[' + email + ']' );
                      reject(error);
                  } else {
                      console.log('#3 Mensaje enviado a ' + info.response);
                      resolve(info.response);
                  }
              });
          }
      )
}

module.exports = {
  registroExitoso,
  aproboPaso1,
  aproboPaso2,
  aproboPaso3,
  aproboCurso,
  controlCorreos
};
