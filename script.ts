/**
 * Interface définissant la structure d'une tâche
 */
interface Task {
  readonly id: number;
  readonly label: string;
  readonly done: boolean;
}

/**
 * Type pour les éléments DOM utilisés dans l'application
 */
type TaskListElement = HTMLUListElement;
type FormElement = HTMLFormElement;
type InputElement = HTMLInputElement;
type SpanElement = HTMLSpanElement;

/**
 * Données "in-memory" simulées (JSON-like) pour démarrer avec quelques tâches
 */
const initialTasks: readonly Task[] = [
  { id: 1, label: "Configurer le projet dans Cursor", done: true },
  { id: 2, label: "Relire le README du rush", done: true },
  { id: 3, label: "Tester l'ajout / suppression de tâches", done: true },
  { id: 4, label: "Ajouter un compteur de tâches", done: true },
  { id: 5, label: "Ajouter une séparation visuelle entre les tâches", done: true },
  { id: 6, label: "Ajouter un bouton de suppression pour chaque tâche", done: true },
  { id: 7, label: "Ajouter un bouton de (dé)cocher pour chaque tâche", done: true },
  { id: 8, label: "Ajouter un bouton de supprimer pour chaque tâche", done: true }
] as const;

let tasks: Task[] = [...initialTasks];
let nextId: number = initialTasks.length + 1;

/**
 * Récupération des éléments DOM avec vérification de nullité
 */
const getElementById = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Élément avec l'ID "${id}" introuvable dans le DOM`);
  }
  return element as T;
};

const todoListEl: TaskListElement = getElementById<TaskListElement>("todo-list");
const doneListEl: TaskListElement = getElementById<TaskListElement>("done-list");
const formEl: FormElement = getElementById<FormElement>("task-form");
const inputEl: InputElement = getElementById<InputElement>("task-input");
const todoCountEl: SpanElement = getElementById<SpanElement>("todo-count");
const doneCountEl: SpanElement = getElementById<SpanElement>("done-count");
const totalCountEl: SpanElement = getElementById<SpanElement>("total-count");

/**
 * Crée un élément <li> pour une tâche
 * @param task - La tâche à afficher
 * @returns L'élément <li> créé
 */
function createTaskElement(task: Task): HTMLLIElement {
  const li = document.createElement("li");
  li.className = `task-item${task.done ? " task-item--done" : ""}`;
  li.dataset.id = task.id.toString();

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;
  checkbox.addEventListener("change", () => toggleTask(task.id));

  const label = document.createElement("span");
  label.className = `task-label${task.done ? " task-label--done" : ""}`;
  label.textContent = task.label;

  const meta = document.createElement("span");
  meta.className = "task-meta";
  meta.textContent = task.done ? "terminée" : "à faire";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "task-delete";
  deleteBtn.type = "button";
  deleteBtn.setAttribute("aria-label", "Supprimer la tâche");
  deleteBtn.textContent = "×";
  deleteBtn.addEventListener("click", () => deleteTask(task.id));

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(meta);
  li.appendChild(deleteBtn);

  return li;
}

/**
 * Met à jour les compteurs de tâches
 */
function updateCounters(): void {
  const todoCount: number = tasks.filter((task) => !task.done).length;
  const doneCount: number = tasks.filter((task) => task.done).length;
  const totalCount: number = tasks.length;

  todoCountEl.textContent = todoCount.toString();
  doneCountEl.textContent = doneCount.toString();
  totalCountEl.textContent = totalCount.toString();
}

/**
 * Rendu complet de la liste des tâches
 * Séparation visuelle : "À faire" / "Terminées"
 */
function renderTasks(): void {
  // On vide les listes
  todoListEl.innerHTML = "";
  doneListEl.innerHTML = "";

  tasks.forEach((task: Task) => {
    const li = createTaskElement(task);

    if (task.done) {
      doneListEl.appendChild(li);
    } else {
      todoListEl.appendChild(li);
    }
  });

  // Mise à jour des compteurs
  updateCounters();
}

/**
 * Ajoute une nouvelle tâche à partir du champ texte
 * @param label - Le libellé de la tâche à ajouter
 */
function addTask(label: string): void {
  const trimmed: string = label.trim();
  if (!trimmed) return;

  const newTask: Task = {
    id: nextId++,
    label: trimmed,
    done: false
  };

  tasks = [newTask, ...tasks];
  renderTasks();
}

/**
 * Inverse l'état "done" d'une tâche
 * @param id - L'identifiant de la tâche à modifier
 */
function toggleTask(id: number): void {
  tasks = tasks.map((task: Task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  renderTasks();
}

/**
 * Supprime une tâche de la liste
 * @param id - L'identifiant de la tâche à supprimer
 */
function deleteTask(id: number): void {
  tasks = tasks.filter((task: Task) => task.id !== id);
  renderTasks();
}

/**
 * Gestion du formulaire d'ajout
 */
formEl.addEventListener("submit", (event: SubmitEvent): void => {
  event.preventDefault();
  addTask(inputEl.value);
  inputEl.value = "";
  inputEl.focus();
});

// Premier rendu
renderTasks();

