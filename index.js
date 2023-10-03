const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];

const FormComponent = class {
  constructor() {
    // Selecting the Select - Input - Button - Div with the class of output using the DOM Manipulation (querySelector).
    this.select = document.querySelector("select");
    this.input = document.querySelector("input");
    this.button = document.querySelector("button");
    this.output = document.querySelector(".output");

    this.select.addEventListener("change", this.findSuccessValue.bind(this));
    this.button.addEventListener("click", this.appendResult.bind(this));
  }

  start() {
    // You can add any additional logic or modifications here
    // For example, if you want to set an initial value for the select and update the success input
    this.select.value = 1;
    this.generateOptions();
    this.findSuccessValue();
  }

  // Generate Options Method (Generate HTML options and fill it with oppoStatus given informations).
  generateOptions() {
    oppoStatus.forEach((element) => {
      const option = document.createElement("option");
      option.value = element.K_OPPO_STATUS;
      option.innerHTML = element.STATUS;
      this.select.appendChild(option);
    });
  }

  // Find Success Value Method (Returns the right status by finding the K_OPPO_STATUS that equals to the current selected status).
  findSuccessValue() {
    const selectedStatus = +this.select.value;
    const rightStatus = oppoStatus.find(
      (status) => status.K_OPPO_STATUS === selectedStatus
    );
    if (rightStatus) {
      this.input.value = rightStatus.SUCCESS;
    }
  }

  // Append Result Method (The Append Result Method appends the result composed of status & success to the output HTML div).
  appendResult(event) {
    event.preventDefault();
    this.output.innerHTML = JSON.stringify({
      status: +this.select.value,
      success: +this.input.value,
    });
  }
};

const fc = new FormComponent();
fc.start();
