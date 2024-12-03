import http.server
import socketserver

PORT = 8081  # Cambié el puerto a 8081 para evitar conflictos

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.path = "/portfolio.html"  # Cambié el archivo a 'portfolio.html'
        return super().do_GET()

try:
    with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()
except OSError as e:
    print(f"Error: {e}")
