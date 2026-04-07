// js/data.js
window.UNIT_NAME = "Unidad 5 · Tratamiento de la correspondencia y la paquetería";

const phase1Bank = [
  {
    q: "La correspondencia se define como...",
    options: [
      "solo cartas internas",
      "cartas, documentación o paquetes que se envían o reciben por vía postal o telemática",
      "únicamente paquetes urgentes",
      "solo documentos oficiales"
    ],
    answerIndex: 1
  },
  {
    q: "La mensajería interna es aquella que...",
    options: [
      "circula entre departamentos o personas dentro de la organización",
      "llega desde fuera de la empresa",
      "solo se usa en la Administración pública",
      "se envía exclusivamente por medios telemáticos"
    ],
    answerIndex: 0
  },
  {
    q: "La mensajería de entrada forma parte de la mensajería externa porque...",
    options: [
      "circula solo dentro de la organización",
      "la recibe la organización desde fuera",
      "se distribuye por correo interno",
      "no requiere registro"
    ],
    answerIndex: 1
  },
  {
    q: "La mensajería de salida consiste en...",
    options: [
      "los mensajes internos entre departamentos",
      "la que recibe la empresa",
      "la que envía la empresa o entidad a terceros",
      "solo los paquetes urgentes"
    ],
    answerIndex: 2
  },
  {
    q: "En la correspondencia de entrada, el primer paso general es...",
    options: [
      "clasificación",
      "recepción o recogida",
      "archivo definitivo",
      "franqueo"
    ],
    answerIndex: 1
  },
  {
    q: "El sello de entrada de correspondencia se estampa normalmente...",
    options: [
      "en la parte inferior del sobre",
      "en la parte superior del documento",
      "solo en documentos confidenciales",
      "en el libro mayor"
    ],
    answerIndex: 1
  },
  {
    q: "Un registro de entrada suele incluir...",
    options: [
      "número, fecha, remitente, destinatario y asunto",
      "solo fecha y remitente",
      "solo destinatario y anexos",
      "número de cuenta y firma"
    ],
    answerIndex: 0
  },
  {
    q: "Cuando una carta llega dirigida a un departamento concreto, según la clasificación...",
    options: [
      "se destruye si no va a administración",
      "se coloca en el casillero correspondiente para su distribución",
      "se devuelve a Correos",
      "se archiva sin abrir"
    ],
    answerIndex: 1
  },
  {
    q: "Si un documento afecta a más de un departamento, lo correcto es...",
    options: [
      "entregar solo el original a todos a la vez",
      "hacer copias para los departamentos implicados y remitir el original a uno de ellos",
      "destruir el original",
      "enviarlo solo al director"
    ],
    answerIndex: 1
  },
  {
    q: "Si llega correo dirigido a la empresa sin destinatario concreto, suele...",
    options: [
      "destruirse",
      "abrirse y revisarse en administración",
      "quedarse en conserjería",
      "devolverse siempre"
    ],
    answerIndex: 1
  },
  {
    q: "Si la correspondencia está mal identificada o los datos son erróneos...",
    options: [
      "se distribuye al azar",
      "se aparta para intentar aclarar su identificación",
      "se abre siempre",
      "se registra como salida"
    ],
    answerIndex: 1
  },
  {
    q: "Si la empresa recibe por error una carta destinada a otra organización...",
    options: [
      "la archiva",
      "la aparta para reenviarla a Correos",
      "la abre y la distribuye",
      "la destruye"
    ],
    answerIndex: 1
  }
];

const phase2Bank = [
  {
    q: "En la correspondencia de salida, el primer paso general suele ser...",
    options: [
      "envío",
      "elaboración del documento",
      "clasificación del remitente",
      "franqueo"
    ],
    answerIndex: 1
  },
  {
    q: "Después de la elaboración del documento de salida, el siguiente paso habitual es...",
    options: [
      "registro",
      "recogida",
      "archivo histórico",
      "devolución"
    ],
    answerIndex: 1
  },
  {
    q: "Un procedimiento correcto de salida incluye...",
    options: [
      "elaboración, recogida, registro y envío",
      "solo recogida y envío",
      "recepción, registro y distribución",
      "clasificación y devolución"
    ],
    answerIndex: 0
  },
  {
    q: "El franqueo consiste en...",
    options: [
      "clasificar la correspondencia",
      "pesar y pagar el servicio de transporte y reparto",
      "registrar la salida",
      "poner el sello de entrada"
    ],
    answerIndex: 1
  },
  {
    q: "Cuando una empresa tiene contratado el servicio con Correos y se usa una impresión en lugar del sello, hablamos de...",
    options: [
      "correo interno",
      "franqueo pagado",
      "correo certificado",
      "registro electrónico"
    ],
    answerIndex: 1
  },
  {
    q: "Si una empresa necesita remitir una comunicación escrita con la mayor rapidez posible entre los medios tradicionales trabajados en el tema, ¿qué opción elegiría normalmente?",
    options: [
      "valija",
      "fax",
      "telegrama",
      "carta certificada"
    ],
    answerIndex: 1
  },
  {
    q: "La correspondencia de salida debe registrarse para...",
    options: [
      "cumplir solo con la estética documental",
      "dejar constancia de la emisión y facilitar el control",
      "sustituir el franqueo",
      "evitar clasificarla"
    ],
    answerIndex: 1
  },
  {
    q: "Elegir entre correo ordinario, certificado o mensajería urgente depende principalmente de...",
    options: [
      "el color del sobre",
      "la importancia, urgencia y necesidad de justificar la entrega",
      "la hora del desayuno",
      "el número de empleados"
    ],
    answerIndex: 1
  },
  {
    q: "La valija se utiliza especialmente para...",
    options: [
      "envíos entre puntos determinados de una misma red o institución",
      "cartas certificadas internacionales",
      "correo publicitario masivo",
      "sustituir al correo interno"
    ],
    answerIndex: 0
  },
  {
    q: "En paquetería, una buena práctica administrativa es...",
    options: [
      "omitir cualquier comprobación del contenido",
      "registrar y controlar la recepción o salida",
      "evitar justificar entregas",
      "no etiquetar"
    ],
    answerIndex: 1
  },
  {
    q: "La correspondencia confidencial debe tratarse con...",
    options: [
      "difusión general",
      "confidencialidad y control",
      "publicidad",
      "libre acceso"
    ],
    answerIndex: 1
  },
  {
    q: "Una propuesta de correspondencia de salida bien resuelta debería incluir...",
    options: [
      "solo el tipo de sobre",
      "pasos del procedimiento y justificación del servicio elegido",
      "únicamente el registro",
      "solo el franqueo"
    ],
    answerIndex: 1
  }
];

const phase3Bank = [
  {
    q: "Un registro público es...",
    options: [
      "un archivo histórico privado",
      "una unidad administrativa que recibe y da fe de escritos presentados ante la Administración",
      "una empresa de mensajería urgente",
      "una oficina de archivo temporal"
    ],
    answerIndex: 1
  },
  {
    q: "Los escritos dirigidos a la Administración pueden presentarse...",
    options: [
      "solo por mostrador",
      "solo telemáticamente",
      "por varias vías: mostrador, otra dependencia, correo o medios telemáticos",
      "solo por correo interno"
    ],
    answerIndex: 2
  },
  {
    q: "La Administración electrónica cumple la misma función documental que...",
    options: [
      "el marketing relacional",
      "el registro clásico de entrada y salida",
      "la mensajería interna",
      "la clasificación manual"
    ],
    answerIndex: 1
  },
  {
    q: "El registro electrónico o telemático sirve para...",
    options: [
      "eliminar la necesidad de prueba documental",
      "proporcionar prueba fehaciente de presentación y salida de documentos",
      "sustituir toda firma",
      "evitar el archivo"
    ],
    answerIndex: 1
  },
  {
    q: "El portafirmas electrónico es una herramienta que...",
    options: [
      "sustituye a todos los registros públicos",
      "facilita el uso de la firma electrónica y agiliza la actividad administrativa",
      "solo permite imprimir documentos",
      "sirve exclusivamente para el correo postal"
    ],
    answerIndex: 1
  },
  {
    q: "Un certificado digital es...",
    options: [
      "un documento en papel con sello",
      "un documento electrónico que vincula a una persona con una clave pública",
      "una tarjeta bancaria",
      "un sobre de Correos"
    ],
    answerIndex: 1
  },
  {
    q: "La firma digital permite principalmente...",
    options: [
      "destruir documentos",
      "identificar y validar actuaciones electrónicas",
      "reducir el número de empleados",
      "sustituir el registro"
    ],
    answerIndex: 1
  },
  {
    q: "Una ventaja de la administración electrónica es...",
    options: [
      "la menor trazabilidad",
      "la agilización de trámites",
      "la pérdida de seguridad",
      "la imposibilidad de seguimiento"
    ],
    answerIndex: 1
  },
  {
    q: "Una limitación o reto de la administración electrónica puede ser...",
    options: [
      "la necesidad de medios tecnológicos y competencias digitales",
      "la desaparición de la firma",
      "la imposibilidad de registrar documentos",
      "la eliminación de toda seguridad"
    ],
    answerIndex: 0
  },
  {
    q: "En una actividad sobre administración electrónica, una respuesta completa debería mencionar...",
    options: [
      "registro electrónico, firma digital y portafirmas",
      "solo el correo postal",
      "solo el archivo físico",
      "solo el sello de entrada"
    ],
    answerIndex: 0
  },
  {
    q: "La digitalización documental no elimina la necesidad de...",
    options: [
      "seguridad y control del acceso",
      "organización del trabajo",
      "identificación del remitente",
      "trazabilidad"
    ],
    answerIndex: 0
  },
  {
    q: "El tratamiento documental en administración electrónica debe garantizar...",
    options: [
      "confidencialidad, integridad y prueba de presentación",
      "solo rapidez",
      "solo ahorro de papel",
      "solo almacenamiento"
    ],
    answerIndex: 0
  }
];

const phase4Bank = [
  {
    q: "La LOPDGDD y el RGPD obligan a...",
    options: [
      "difundir libremente cualquier documento",
      "mantener en secreto la información y destruir documentos confidenciales cuando ya no sean necesarios",
      "registrar solo paquetes urgentes",
      "abrir toda correspondencia recibida"
    ],
    answerIndex: 1
  },
  {
    q: "La protección de datos afecta al tratamiento de correspondencia y paquetería porque...",
    options: [
      "no contienen datos personales",
      "pueden incluir datos personales y documentación sensible",
      "solo se aplica al correo electrónico",
      "solo afecta a grandes empresas"
    ],
    answerIndex: 1
  },
  {
    q: "La eliminación de documentos confidenciales debe hacerse...",
    options: [
      "sin ningún control",
      "de forma segura y controlada",
      "solo al final del año",
      "entregándolos a cualquier persona"
    ],
    answerIndex: 1
  },
  {
    q: "La confidencialidad documental exige...",
    options: [
      "dejar la documentación visible para todos",
      "controlar acceso y tratamiento de la información",
      "no registrar entradas",
      "evitar cualquier archivo"
    ],
    answerIndex: 1
  },
  {
    q: "El tratamiento de paquetería en relación con la protección de datos implica...",
    options: [
      "que nunca contenga datos personales",
      "que su manejo también debe hacerse con seguridad y confidencialidad",
      "que no necesita custodia",
      "que solo importa el peso"
    ],
    answerIndex: 1
  },
  {
    q: "Una buena práctica en seguridad documental sería...",
    options: [
      "desatender documentos una vez abiertos",
      "custodiar documentos y limitar accesos no autorizados",
      "compartir información sensible por comodidad",
      "dejar paquetes sin identificar"
    ],
    answerIndex: 1
  },
  {
    q: "La protección de datos afecta a...",
    options: [
      "la eliminación física de documentos",
      "el manejo diario de la correspondencia",
      "la custodia de datos personales",
      "todas las anteriores"
    ],
    answerIndex: 3
  },
  {
    q: "En un procedimiento seguro de correspondencia, la documentación sensible debería...",
    options: [
      "circular sin control",
      "identificarse y manejarse con especial precaución",
      "abrirse siempre delante de cualquiera",
      "eliminarse sin registro"
    ],
    answerIndex: 1
  },
  {
    q: "Una propuesta de mejora en seguridad podría incluir...",
    options: [
      "más acceso libre a documentos",
      "protocolos claros de confidencialidad y destrucción segura",
      "menos control interno",
      "más copias sin necesidad"
    ],
    answerIndex: 1
  },
  {
    q: "En el ámbito administrativo, la seguridad documental busca...",
    options: [
      "solo rapidez",
      "evitar filtraciones y proteger los datos",
      "reducir la clasificación",
      "eliminar el registro"
    ],
    answerIndex: 1
  },
  {
    q: "La confidencialidad no se limita a los medios digitales porque...",
    options: [
      "el papel ya no se usa",
      "también existe documentación física con datos sensibles",
      "solo importa el correo electrónico",
      "solo afecta a certificados"
    ],
    answerIndex: 1
  },
  {
    q: "Una respuesta bien fundamentada sobre seguridad y correspondencia debe relacionar...",
    options: [
      "LOPDGDD/RGPD, custodia documental y destrucción segura",
      "solo tipos de sobres",
      "solo el franqueo",
      "solo el correo interno"
    ],
    answerIndex: 0
  }
];

const phase5Bank = [
  {
    q: "El circuito de la correspondencia de entrada termina normalmente con...",
    options: [
      "la distribución al destinatario o departamento correspondiente",
      "el franqueo pagado",
      "la elaboración del documento",
      "la firma digital"
    ],
    answerIndex: 0
  },
  {
    q: "En la correspondencia de salida, el registro es importante porque...",
    options: [
      "sustituye al envío",
      "permite dejar constancia y facilitar el control posterior",
      "elimina la necesidad de clasificación",
      "solo sirve para paquetería"
    ],
    answerIndex: 1
  },
  {
    q: "Si una empresa debe enviar un documento relevante cuya entrega necesita justificarse, lo más adecuado sería...",
    options: [
      "correo ordinario",
      "correo certificado o servicio con trazabilidad",
      "mensajería interna",
      "dejarlo sin registrar"
    ],
    answerIndex: 1
  },
  {
    q: "Si un envío contiene datos especialmente sensibles, además del servicio elegido debe garantizarse...",
    options: [
      "rapidez sin más",
      "confidencialidad y control de acceso",
      "publicidad del contenido",
      "solo un sobre grande"
    ],
    answerIndex: 1
  },
  {
    q: "El registro electrónico y la correspondencia física comparten la función de...",
    options: [
      "servir de prueba y control documental",
      "eliminar la necesidad de archivo",
      "sustituir toda mensajería",
      "impedir la comunicación"
    ],
    answerIndex: 0
  },
  {
    q: "Una gestión profesional de la paquetería debería incluir...",
    options: [
      "solo recepción visual",
      "registro, clasificación, control y custodia cuando proceda",
      "solo peso y tamaño",
      "solo firma del mensajero"
    ],
    answerIndex: 1
  },
  {
    q: "El criterio principal para elegir medio de envío en un caso práctico suele ser...",
    options: [
      "el color corporativo",
      "urgencia, importancia, coste y necesidad de justificante",
      "la preferencia personal del empleado",
      "el tamaño del despacho"
    ],
    answerIndex: 1
  },
  {
    q: "Una incidencia en el circuito documental puede afectar a...",
    options: [
      "trazabilidad y plazos",
      "solo la estética",
      "solo la recepción",
      "nunca al destinatario"
    ],
    answerIndex: 0
  },
  {
    q: "Una conclusión global del tema sería que el tratamiento de correspondencia y paquetería exige...",
    options: [
      "solo rapidez operativa",
      "organización, control, seguridad y confidencialidad",
      "solo clasificación manual",
      "solo uso de medios telemáticos"
    ],
    answerIndex: 1
  },
  {
    q: "En un caso integrador bien resuelto se espera que el alumnado relacione...",
    options: [
      "registro, clasificación, servicios de envío y protección de datos",
      "solo el correo interno",
      "solo los sobres",
      "solo la firma digital"
    ],
    answerIndex: 0
  },
  {
    q: "Si un documento va dirigido a varios departamentos, una actuación correcta es...",
    options: [
      "enviarlo solo a uno y olvidar el resto",
      "hacer copias y distribuir según proceda",
      "destruir el original",
      "devolverlo a Correos"
    ],
    answerIndex: 1
  },
  {
    q: "Cuando un envío está mal identificado, lo correcto es...",
    options: [
      "distribuirlo al azar",
      "apartarlo para intentar aclarar su destino",
      "abrirlo sin control",
      "registrarlo como salida"
    ],
    answerIndex: 1
  }
];

window.phase1Bank = phase1Bank;
window.phase2Bank = phase2Bank;
window.phase3Bank = phase3Bank;
window.phase4Bank = phase4Bank;
window.phase5Bank = phase5Bank;
