# AngularBasicFinalLabTaskManager

📝 Práctica Final de Angular Básico
📌 Título: Gestor de Tareas

🎯 Objetivo
Desarrollar una aplicación SPA (Single Page Application) usando Angular que permita gestionar una lista de tareas, categorizarlas y visualizarlas con filtros personalizados. Esta práctica evaluará la comprensión de los siguientes conceptos clave:

Directivas estructurales y de atributos

Pipes personalizados y built-in

Servicios para gestión de datos

Routing con parámetros y rutas hijas

Data binding (one-way, two-way y event binding)

📁 Estructura mínima de la app
Rutas requeridas:
    Ruta	    Componente	        Descripción
-   /	        HomeComponent	    Página de bienvenida
-   /tasks	    TaskListComponent	Muestra lista de tareas
-   /tasks/:id	TaskDetailComponent	Muestra detalles de una tarea
-   /add-task	AddTaskComponent	Formulario para crear nueva tarea
📌 Requerimientos funcionales
✅ Tareas
Crear, listar, editar y eliminar tareas.

Cada tarea debe tener:

- Título
- Descripción
- Fecha de vencimiento
- Prioridad (Alta, Media, Baja)
- Estado (Pendiente, En Proceso, Completada)
- Categoría (Personal, Trabajo, Otro)

✅ Data Binding
Mostrar tareas en una lista con interpolación y property binding.

Usar event binding para botones (editar, eliminar).

Two-way binding para formularios con [(ngModel)].

✅ Directivas
Usar *@If y *@For para mostrar elementos condicionales y listas.

Crear una directiva que resalte un usuario si su nombre comienza con una vocal (A, E, I, O, U).

✅ Pipes
Usar pipes integrados como date, uppercase, etc.

Crear un pipe personalizado para mostrar el estado de la tarea en texto coloreado o como emoji.

✅ Servicios
Crear un servicio (TaskService) que consuma una API pública (https://jsonplaceholder.typicode.com/todos) usando HttpClient. Este servicio debe permitir:

Obtener todas las tareas

Obtener una tarea por ID

(Opcional) Agregar, editar o eliminar tareas simuladas (aunque la API no guarda los cambios, puedes hacer el POST/PUT/DELETE para practicar).

Utilizar inyección de dependencias para consumir el servicio desde los componentes.

✅ Routing
Configurar rutas básicas y navegación.

Mostrar detalles de una tarea con ActivatedRoute (usando :id).

Ruta protegida opcionalmente con un guard (bonus).

**✨ Requerimientos extra **
Confirmación antes de eliminar una tarea (con window.confirm o modal).

Filtro de tareas por estado o categoría usando un select.

Uso de rutas hijas, por ejemplo /tasks/:id/edit.