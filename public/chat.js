var socket = io.connect('http://localhost:9090');

var message = document.querySelector("#message");
var handle = document.querySelector("#handle");
var btn = document.querySelector("#send");
var output  = document.querySelector("#output");
var feedback  = document.querySelector("#feedback");

btn.addEventListener("click", () => {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

socket.on('chat', data => {
  output.innerHTML += `<p><strong>${data.handle}:</strong> ${data.message}</p>`;
  feedback.innerHTML = '';
});

socket.on('typing', data => {
  feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
});

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
});
