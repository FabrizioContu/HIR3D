export const TAGS = [
  {
    name: "Frontend",
    class: "bg-black text-[#32e0f4]",
  },
  {
    name: "Backend",
    class: "bg-[#003159] text-white",
  },
  {
    name: "Data Analyst",
    class: "bg-[#1976D2] text-white",
  },
  {
    name: "Full Stack",
    class: "bg-[#8A2BE2] text-white",
  },
  {
    name: "Data Scientist",
    class: "bg-[#1976D2] text-white",
  },
  {
    name: "Software Engineer",
    class: "bg-[#101011] text-white",
  },
];

export const PREGUNTAS = [
  {
    especialidad: "Frontend",
    nivel: "Junior",
    preguntas: [
      {
        pregunta: "¿Qué es el modelo de caja en CSS?",
        opciones: [
          "Es una forma de definir el borde de los elementos.",
          "Es un concepto que describe cómo se calcula el ancho y alto de los elementos en HTML.",
          "Es un patrón de diseño para aplicaciones web.",
        ],
      },
      {
        pregunta: "¿Qué es el 'flexbox' en CSS y para qué se utiliza?",
        opciones: [
          "Es una propiedad para definir animaciones.",
          "Es un modelo de layout que permite distribuir elementos de forma flexible.",
          "Es una herramienta para manejar imágenes en la web.",
        ],
      },
      {
        pregunta: "¿Qué es el 'DOM' y cómo se manipula?",
        opciones: [
          "Es una estructura de base de datos.",
          "Es un modelo de objetos que representa la estructura de un documento HTML.",
          "Es un sistema de seguridad en las aplicaciones web.",
        ],
      },
    ],
  },
  {
    especialidad: "Frontend",
    nivel: "Mid",
    preguntas: [
      {
        pregunta: "¿Cómo optimizarías el rendimiento de una página web?",
        opciones: [
          "Minificando archivos JavaScript y CSS.",
          "Utilizando imágenes con mayor resolución.",
          "Incrementando el tamaño de los archivos.",
        ],
      },
      {
        pregunta: "¿Cuál es la diferencia entre 'flex' y 'grid' en CSS?",
        opciones: [
          "Flexbox es para estructuras unidimensionales y Grid para estructuras bidimensionales.",
          "Ambos sirven para hacer grids.",
          "Flexbox es para posicionar elementos en columnas y Grid en filas.",
        ],
      },
      {
        pregunta: "¿Qué herramientas usas para el debugging en JavaScript?",
        opciones: [
          "Consolas de navegador, depuradores como Chrome DevTools.",
          "Utilizo únicamente `console.log()`.",
          "No utilizo herramientas para el debugging.",
        ],
      },
    ],
  },
  {
    especialidad: "Frontend",
    nivel: "Senior",
    preguntas: [
      {
        pregunta:
          "¿Cómo implementas el rendimiento de un sitio web en términos de JavaScript y recursos?",
        opciones: [
          "Caché de recursos, uso de Service Workers, y lazy loading de contenido.",
          "Reducir el tamaño de las imágenes y subir los recursos a un CDN.",
          "Usar un solo archivo JavaScript que cargue todos los recursos.",
        ],
      },
      {
        pregunta: "¿Qué diferencias existen entre React y Angular?",
        opciones: [
          "React es una biblioteca para construir interfaces de usuario y Angular es un framework completo.",
          "React es más rápido que Angular en todos los aspectos.",
          "Angular solo se puede usar en proyectos pequeños, React es más versátil.",
        ],
      },
      {
        pregunta:
          "¿Cómo manejarías el estado en una aplicación de gran escala?",
        opciones: [
          "Usando Redux o Context API para centralizar el estado.",
          "Manteniendo el estado solo en los componentes locales.",
          "No es necesario usar ninguna librería, solo pasar props.",
        ],
      },
    ],
  },
  {
    especialidad: "Frontend",
    nivel: "Expert",
    preguntas: [
      {
        pregunta:
          "¿Cómo optimizarías una aplicación React para mejorar el tiempo de carga inicial (First Load)?",
        opciones: [
          "Code splitting, SSR (Server Side Rendering) y lazy loading de componentes.",
          "Minificar el CSS solamente.",
          "Agrupar todos los componentes en un solo archivo JS.",
        ],
      },
      {
        pregunta:
          "¿Qué técnicas avanzadas de accesibilidad aplicarías en una Single Page Application?",
        opciones: [
          "Gestión del focus, ARIA roles dinámicos, y navegación con teclado completa.",
          "Solo usar etiquetas `<alt>` en imágenes.",
          "Esconder todo lo que no sea relevante para los lectores de pantalla.",
        ],
      },
      {
        pregunta:
          "¿Cómo evaluarías el rendimiento de una app usando herramientas como Lighthouse y Web Vitals?",
        opciones: [
          "Analizando métricas como LCP, FID y CLS y optimizando según sus resultados.",
          "Solo revisando si carga rápido.",
          "Lighthouse no es útil para rendimiento.",
        ],
      },
    ],
  },

  {
    especialidad: "Backend",
    nivel: "Junior",
    preguntas: [
      {
        pregunta: "¿Qué es una API RESTful?",
        opciones: [
          "Es una forma de crear aplicaciones móviles.",
          "Es un tipo de arquitectura para construir servicios web que usa HTTP.",
          "Es una herramienta para bases de datos.",
        ],
      },
      {
        pregunta: "¿Cómo manejas las peticiones HTTP en un servidor?",
        opciones: [
          "Utilizando métodos como GET, POST, PUT y DELETE.",
          "Utilizando solo el método GET.",
          "No se manejan peticiones HTTP, todo se procesa de una vez.",
        ],
      },
      {
        pregunta: "¿Qué es una base de datos SQL y cómo interactúas con ella?",
        opciones: [
          "Es una base de datos que guarda información en tablas, y se interactúa con ella usando SQL.",
          "Es una base de datos en la nube que no necesita programación.",
          "Es una base de datos que guarda archivos de texto y se manipulan con comandos.",
        ],
      },
    ],
  },
  {
    especialidad: "Backend",
    nivel: "Mid",
    preguntas: [
      {
        pregunta: "¿Cómo manejarías la autenticación en una API?",
        opciones: [
          "Usando JWT (JSON Web Tokens) o OAuth.",
          "Utilizando cookies solo.",
          "No es necesario implementar seguridad en una API.",
        ],
      },
      {
        pregunta: "¿Qué son las microservicios y cuándo es apropiado usarlos?",
        opciones: [
          "Son servicios independientes que se comunican entre sí, ideales para aplicaciones grandes.",
          "Son servicios que solo se usan en entornos pequeños.",
          "Son aplicaciones monolíticas pero separadas por módulos.",
        ],
      },
      {
        pregunta: "¿Cómo optimizarías las consultas a una base de datos?",
        opciones: [
          "Usando índices, limitando las consultas y evitando consultas complejas.",
          "Haciendo consultas siempre a todas las tablas.",
          "Consultando solo por el campo que se busca con el `SELECT *`.",
        ],
      },
    ],
  },
  {
    especialidad: "Backend",
    nivel: "Senior",
    preguntas: [
      {
        pregunta:
          "¿Cómo manejarías la escalabilidad en un sistema distribuido?",
        opciones: [
          "Usando balanceadores de carga y particionamiento de bases de datos.",
          "Duplicando las instancias de la base de datos.",
          "Aumentando solo la memoria RAM de los servidores.",
        ],
      },
      {
        pregunta:
          "¿Qué es un patrón de diseño como el 'Singleton' y cuándo lo usarías?",
        opciones: [
          "Es un patrón que asegura que una clase tenga una única instancia.",
          "Es un patrón para gestionar peticiones HTTP.",
          "Es un patrón para mejorar el rendimiento de las bases de datos.",
        ],
      },
      {
        pregunta:
          "¿Qué estrategias utilizas para garantizar la alta disponibilidad de un sistema?",
        opciones: [
          "Implementar replicación, balanceo de carga y sistemas de failover.",
          "Simplemente añadir más servidores al sistema.",
          "Evitar que se realicen actualizaciones a los sistemas críticos.",
        ],
      },
    ],
  },
  {
    especialidad: "Backend",
    nivel: "Expert",
    preguntas: [
      {
        pregunta:
          "¿Cómo implementarías una arquitectura de alta disponibilidad y tolerancia a fallos en un sistema crítico?",
        opciones: [
          "Clustering, replicación, orquestación con Kubernetes y failover automático.",
          "Instalando todo en una sola máquina virtual.",
          "Aumentando la capacidad del disco duro.",
        ],
      },
      {
        pregunta:
          "¿Qué consideraciones de seguridad aplicarías en una API expuesta a terceros (public API)?",
        opciones: [
          "Rate limiting, validación exhaustiva, OAuth2, CORS y logging.",
          "Permitir todos los orígenes para más flexibilidad.",
          "Solo poner un login básico.",
        ],
      },
      {
        pregunta:
          "¿Cómo garantizarías la consistencia de datos en una arquitectura basada en microservicios?",
        opciones: [
          "Implementando patrones como SAGA o Transactional Outbox.",
          "Usando solo bases de datos relacionales.",
          "Evitando compartir información entre servicios.",
        ],
      },
    ],
  },

  {
    especialidad: "Data Analyst",
    nivel: "Junior",
    preguntas: [
      {
        pregunta: "¿Qué es una tabla dinámica en Excel y para qué se utiliza?",
        opciones: [
          "Para hacer gráficos rápidamente.",
          "Para resumir y analizar grandes cantidades de datos de forma interactiva.",
          "Para almacenar información en la nube.",
        ],
      },
      {
        pregunta: "¿Qué es una consulta SQL básica?",
        opciones: [
          "Un script de Python.",
          "Una petición para insertar datos automáticamente.",
          "Una instrucción para obtener información específica de una base de datos.",
        ],
      },
      {
        pregunta: "¿Qué es la limpieza de datos?",
        opciones: [
          "Es eliminar los archivos innecesarios del sistema.",
          "Es el proceso de detectar y corregir errores o inconsistencias en los datos.",
          "Es borrar todos los datos antiguos de un archivo.",
        ],
      },
    ],
  },
  {
    especialidad: "Data Analyst",
    nivel: "Mid",
    preguntas: [
      {
        pregunta:
          "¿Cómo identificarías valores atípicos en un conjunto de datos?",
        opciones: [
          "Visualizando datos con boxplots o histograms.",
          "Usando únicamente tablas dinámicas.",
          "Ordenando los datos manualmente.",
        ],
      },
      {
        pregunta: "¿Qué función cumple una JOIN en SQL?",
        opciones: [
          "Combinar registros de dos o más tablas basadas en una columna relacionada.",
          "Borrar registros duplicados.",
          "Actualizar datos de múltiples tablas a la vez.",
        ],
      },
      {
        pregunta:
          "¿Qué herramienta usarías para crear dashboards interactivos?",
        opciones: ["Tableau o Power BI.", "Notepad.", "Photoshop."],
      },
    ],
  },
  {
    especialidad: "Data Analyst",
    nivel: "Senior",
    preguntas: [
      {
        pregunta:
          "¿Cómo optimizas consultas SQL para grandes volúmenes de datos?",
        opciones: [
          "Usando índices, filtros y evitando subconsultas innecesarias.",
          "Duplicando tablas.",
          "Usando funciones matemáticas en todas las columnas.",
        ],
      },
      {
        pregunta: "¿Cómo manejarías datos faltantes en un análisis?",
        opciones: [
          "Imputando con la media, mediana o utilizando algoritmos de predicción.",
          "Ignorando las filas vacías sin análisis.",
          "Rellenando todos los valores con cero.",
        ],
      },
      {
        pregunta: "¿Cómo asegurarías la calidad de los datos?",
        opciones: [
          "Implementando validaciones, revisiones periódicas y controles automáticos.",
          "Guardando los datos en hojas de Excel.",
          "Preguntando al cliente si los datos son válidos.",
        ],
      },
    ],
  },
  {
    especialidad: "Data Analyst",
    nivel: "Expert",
    preguntas: [
      {
        pregunta:
          "¿Cómo diseñarías una arquitectura de análisis de datos escalable?",
        opciones: [
          "Utilizando pipelines de datos, bases de datos distribuidas y herramientas como Airflow.",
          "Almacenando los datos en múltiples Excel compartidos.",
          "Consultando los datos en tiempo real sin almacenarlos.",
        ],
      },
      {
        pregunta:
          "¿Cómo aplicarías estadística avanzada en el análisis de datos?",
        opciones: [
          "Utilizando regresión, pruebas de hipótesis, y modelos de inferencia.",
          "Aplicando filtros manuales a los datos.",
          "Agrupando datos visualmente.",
        ],
      },
      {
        pregunta: "¿Qué técnicas usarías para detectar sesgos en los datos?",
        opciones: [
          "Revisar la representatividad de la muestra y aplicar análisis exploratorio.",
          "Utilizar dashboards con colores llamativos.",
          "Comparar archivos CSV entre sí.",
        ],
      },
    ],
  },
  {
    especialidad: "Data Scientist",
    nivel: "Junior",
    preguntas: [
      {
        pregunta: "¿Qué es la regresión lineal?",
        opciones: [
          "Un algoritmo de clasificación.",
          "Un modelo estadístico para predecir valores continuos.",
          "Una base de datos para almacenar datos numéricos.",
        ],
      },
      {
        pregunta:
          "¿Qué herramienta se usa comúnmente para análisis de datos en Python?",
        opciones: ["Pandas.", "React.", "Photoshop."],
      },
      {
        pregunta: "¿Qué representa una matriz de confusión?",
        opciones: [
          "Una forma de evaluar la precisión de un modelo de clasificación.",
          "Una tabla de Excel con datos desordenados.",
          "Un tipo de gráfico de barras.",
        ],
      },
    ],
  },
  {
    especialidad: "Data Scientist",
    nivel: "Mid",
    preguntas: [
      {
        pregunta: "¿Cuál es la diferencia entre overfitting y underfitting?",
        opciones: [
          "Overfitting es cuando el modelo se ajusta demasiado a los datos de entrenamiento, underfitting es cuando no se ajusta lo suficiente.",
          "Overfitting es cuando el modelo se ejecuta más rápido.",
          "Underfitting es cuando el modelo se detiene antes de tiempo.",
        ],
      },
      {
        pregunta: "¿Qué es el preprocesamiento de datos?",
        opciones: [
          "La preparación de los datos para el modelado, incluyendo normalización y limpieza.",
          "El proceso de exportar gráficos.",
          "La parte visual del análisis.",
        ],
      },
      {
        pregunta: "¿Qué algoritmos usarías para clasificación?",
        opciones: [
          "Random Forest, KNN, Logistic Regression.",
          "Linear Regression, K-means.",
          "SQLite y Redis.",
        ],
      },
    ],
  },
  {
    especialidad: "Data Scientist",
    nivel: "Senior",
    preguntas: [
      {
        pregunta: "¿Cómo evaluarías el rendimiento de un modelo?",
        opciones: [
          "Utilizando métricas como precisión, recall, F1-score y AUC-ROC.",
          "Solo viendo la precisión general.",
          "Observando los gráficos generados.",
        ],
      },
      {
        pregunta: "¿Qué técnica usarías para reducir la dimensionalidad?",
        opciones: [
          "PCA (Análisis de Componentes Principales).",
          "Unir columnas similares.",
          "Dividir los datos en más filas.",
        ],
      },
      {
        pregunta:
          "¿Qué papel juega el feature engineering en Machine Learning?",
        opciones: [
          "Es esencial para mejorar la calidad del modelo, transformando datos brutos en atributos relevantes.",
          "Es opcional, solo para análisis exploratorios.",
          "No afecta mucho a los resultados del modelo.",
        ],
      },
    ],
  },
  {
    especialidad: "Data Scientist",
    nivel: "Expert",
    preguntas: [
      {
        pregunta:
          "¿Cómo gestionarías un pipeline completo de Machine Learning en producción?",
        opciones: [
          "Automatizando etapas con herramientas como MLflow o Kubeflow.",
          "Ejecutando los scripts manualmente.",
          "Generando reportes en Excel.",
        ],
      },
      {
        pregunta: "¿Qué importancia tiene el versionado de modelos?",
        opciones: [
          "Permite controlar cambios y reproducir resultados en producción.",
          "Solo sirve para desarrollo inicial.",
          "No es necesario en la práctica.",
        ],
      },
      {
        pregunta:
          "¿Qué tipo de validación cruzada aplicarías en un conjunto de datos muy desbalanceado?",
        opciones: [
          "Stratified K-Fold.",
          "Random Split.",
          "Leave-One-Out Cross Validation.",
        ],
      },
    ],
  },
  {
    especialidad: "Software Engineer",
    nivel: "Junior",
    preguntas: [
      {
        pregunta: "¿Qué es el control de versiones?",
        opciones: [
          "Una técnica para rastrear y gestionar cambios en el código fuente.",
          "Una forma de cambiar el lenguaje de programación.",
          "Una carpeta donde se guardan backups del código.",
        ],
      },
      {
        pregunta: "¿Para qué se usa Git?",
        opciones: [
          "Para gestionar versiones de código y colaborar en equipo.",
          "Para crear imágenes.",
          "Para compilar código automáticamente.",
        ],
      },
      {
        pregunta: "¿Qué es una función?",
        opciones: [
          "Una secuencia de instrucciones que realiza una tarea específica.",
          "Un archivo de configuración.",
          "Un tipo de variable.",
        ],
      },
    ],
  },

  {
    especialidad: "Software Engineer",
    nivel: "Mid",
    preguntas: [
      {
        pregunta:
          "¿Cuál es la diferencia entre programación sincrónica y asincrónica?",
        opciones: [
          "La programación asincrónica permite ejecutar tareas en paralelo sin bloquear el hilo principal.",
          "La programación sincrónica es más moderna.",
          "Ambas se ejecutan al mismo tiempo siempre.",
        ],
      },
      {
        pregunta:
          "¿Qué es el principio de responsabilidad única (SRP) en SOLID?",
        opciones: [
          "Cada módulo o clase debe tener una única razón para cambiar.",
          "Cada módulo debe ser capaz de hacer muchas tareas.",
          "El código debe poder ejecutarse en una sola línea.",
        ],
      },
      {
        pregunta: "¿Qué es un test unitario?",
        opciones: [
          "Una prueba para verificar el correcto funcionamiento de una unidad específica de código.",
          "Un test que se ejecuta una vez al año.",
          "Una función que mide el rendimiento del sistema.",
        ],
      },
    ],
  },
  {
    especialidad: "Software Engineer",
    nivel: "Senior",
    preguntas: [
      {
        pregunta:
          "¿Qué patrón de arquitectura seguirías para construir una API escalable?",
        opciones: [
          "Arquitectura basada en microservicios.",
          "Monolito con funciones anidadas.",
          "Solo REST sin ningún patrón arquitectónico.",
        ],
      },
      {
        pregunta: "¿Cómo gestionas la deuda técnica en un proyecto?",
        opciones: [
          "Priorizando tareas técnicas en el backlog, realizando refactorizaciones y documentando el impacto.",
          "Ignorándola hasta que sea urgente.",
          "Eliminando código sin avisar.",
        ],
      },
      {
        pregunta: "¿Qué son los principios DRY y KISS?",
        opciones: [
          "DRY: No te repitas. KISS: Manténlo simple.",
          "DRY: No uses interfaces. KISS: Escribe código complejo.",
          "Son acrónimos de tecnologías obsoletas.",
        ],
      },
    ],
  },
  {
    especialidad: "Software Engineer",
    nivel: "Expert",
    preguntas: [
      {
        pregunta:
          "¿Cómo implementarías CI/CD en un proyecto con múltiples microservicios?",
        opciones: [
          "Configurando pipelines automatizados por servicio, orquestados con herramientas como Jenkins, GitHub Actions o GitLab CI.",
          "Haciendo deploy manual una vez al mes.",
          "Copiando y pegando los binarios en producción.",
        ],
      },
      {
        pregunta:
          "¿Qué estrategia seguirías para asegurar escalabilidad horizontal en tu aplicación?",
        opciones: [
          "Diseñar servicios sin estado (stateless) y balancear la carga entre instancias.",
          "Usar una sola máquina muy potente.",
          "Aumentar la base de datos en un solo servidor.",
        ],
      },
      {
        pregunta:
          "¿Qué técnicas aplicarías para mejorar el rendimiento de una aplicación crítica?",
        opciones: [
          "Profiling, caching, lazy loading, y optimización de consultas.",
          "Eliminar funciones no utilizadas.",
          "Reescribir toda la app desde cero cada vez.",
        ],
      },
    ],
  },
];
