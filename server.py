"""
VACPA Planner 2026 - Lightweight Local Storage Server
Tu dong phuc vu giao dien web va luu tru du lieu vao tep vacpa_data.json tren dia cung.
"""

import http.server
import json
import os
import sys
import socketserver

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(DIRECTORY, "vacpa_data.json")

class PlannerRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS for file:// protocol and local testing
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Cache-Control")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/data" or self.path == "/api/load":
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            if os.path.exists(DATA_FILE):
                try:
                    with open(DATA_FILE, "r", encoding="utf-8") as f:
                        data = f.read()
                    self.wfile.write(data.encode("utf-8"))
                except Exception as e:
                    err_msg = json.dumps({"status": "error", "message": str(e)})
                    self.wfile.write(err_msg.encode("utf-8"))
            else:
                self.wfile.write(json.dumps({"status": "empty"}).encode("utf-8"))
            return

        super().do_GET()

    def do_POST(self):
        if self.path == "/api/save":
            try:
                content_length = int(self.headers.get("Content-Length", 0))
                body = self.rfile.read(content_length)
                # Validate JSON
                parsed = json.loads(body.decode("utf-8"))
                
                # Write to vacpa_data.json safely
                temp_file = DATA_FILE + ".tmp"
                with open(temp_file, "w", encoding="utf-8") as f:
                    json.dump(parsed, f, ensure_ascii=False, indent=2)
                
                if os.path.exists(DATA_FILE):
                    os.replace(temp_file, DATA_FILE)
                else:
                    os.rename(temp_file, DATA_FILE)

                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                resp = json.dumps({"status": "success", "message": "Saved to disk successfully"})
                self.wfile.write(resp.encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                resp = json.dumps({"status": "error", "message": str(e)})
                self.wfile.write(resp.encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    server_address = ("127.0.0.1", PORT)
    try:
        httpd = ThreadingTCPServer(server_address, PlannerRequestHandler)
        print(f"VACPA Planner Server dang chay tai: http://localhost:{PORT}")
        print(f"File du lieu luu tru: {DATA_FILE}")
        httpd.serve_forever()
    except Exception as e:
        print(f"Loi khoi dong server: {e}")
