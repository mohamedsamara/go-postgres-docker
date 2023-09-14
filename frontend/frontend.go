package frontend

import (
	"embed"
	"fmt"
	"net/http"
	"path/filepath"
	"strings"
)

//go:embed all:dist
var DistFs embed.FS

var BuildPath = "dist"

func IndexRoute(w http.ResponseWriter, r *http.Request) {
	indexHTML, err := DistFs.ReadFile(filepath.Join(BuildPath, "index.html"))

	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	w.Header().Set("content-type", "text/html")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(indexHTML))

}

func FaviconRoute(w http.ResponseWriter, r *http.Request) {
	favicon, err := DistFs.ReadFile(filepath.Join(BuildPath, "favicon.ico"))
	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusNotFound)
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(favicon))
}

func StaticRoute(w http.ResponseWriter, r *http.Request) {
	path := r.URL.RequestURI()
	if strings.HasSuffix(path, ".css") {
		w.Header().Set("content-type", "text/css")
	}
	if strings.HasSuffix(path, ".js") {
		w.Header().Set("content-type", "text/javascript")
	}
	if strings.HasSuffix(path, ".svg") {
		w.Header().Set("content-type", "image/svg+xml")
	}
	file, err := DistFs.ReadFile(filepath.Join(BuildPath, path))
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(file))
}
