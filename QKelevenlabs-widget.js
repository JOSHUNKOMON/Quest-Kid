class ElevenLabsWidget extends HTMLElement {
   connectedCallback() {
       // Add the ElevenLabs script dynamically
       const script = document.createElement("script");
       script.src = "https://elevenlabs.io/convai-widget/index.js";
       script.async = true;
       document.head.appendChild(script);

       // Create the ElevenLabs widget inside the element
       const widget = document.createElement("elevenlabs-convai");
       widget.setAttribute("agent-id", "8XFc8tVlF39iFe5SWd3N"); // Replace with your agent ID
       this.appendChild(widget);
   }
}

// Define the custom element
customElements.define("elevenlabs-widget", ElevenLabsWidget);
