document$.subscribe(function () {
  mermaid.initialize({
    startOnLoad: false,
    theme: "default",
  });
  mermaid.run({
    nodes: document.querySelectorAll(".mermaid"),
  });
});
