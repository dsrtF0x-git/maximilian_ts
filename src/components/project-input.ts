import { Component } from "./base-component.js";
import { Validatable, validate } from "../util/validation.js";
import { autobind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.titleInput = this.element.querySelector("#title") as HTMLInputElement;
    this.descriptionInput = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInput = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.configure();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInput.value;
    const enteredDescription = this.descriptionInput.value;
    const enteredPeople = this.peopleInput.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    )
      if (
        enteredTitle.trim().length === 0 ||
        enteredDescription.trim().length === 0 ||
        enteredPeople.trim().length === 0
      ) {
        alert("Please, try again");
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople];
      }
  }

  private clearInputs() {
    this.titleInput.value = "";
    this.descriptionInput.value = "";
    this.peopleInput.value = "";
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent(): void {}
}
