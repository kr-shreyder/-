package http

import (
	_ "github.com/swaggo/http-swagger"
	_ "github.com/swaggo/swag"
	"net/http"
	_ "polygames/cmd/docs"
	"polygames/internal/domain"
)

// @title          Аутентификация пользователя
// @version        1.0
// @description    Методы для аутентификации пользователя

// @host     localhost:8080
// @BasePath /api/v1/auth/

// @Summary Авторизация пользователя
// @Description Метод для авторизации пользователя
// @ID signIn
// @Router /sign-in [post]
func (s *server) SignIn(w http.ResponseWriter, r *http.Request) {
	var req domain.SignInRequest
	if err := s.readJSON(&req, r); err != nil {
		s.sendError(err, w)
		return
	}

	response, err := s.core.SignIn(r.Context(), &req)
	if err != nil {
		s.sendError(err, w)
		return
	}

	s.sendJSON(http.StatusOK, response, w)
}

// @Summary Регистрация пользователя
// @Description Метод для регистрации пользователя
// @ID signUp
// @Router /sign-up [post]
func (s *server) SignUp(w http.ResponseWriter, r *http.Request) {
	var req domain.SignUpRequest
	if err := s.readJSON(&req, r); err != nil {
		s.sendError(err, w)
		return
	}

	response, err := s.core.SignUp(r.Context(), &req)
	if err != nil {
		s.sendError(err, w)
		return
	}

	s.sendJSON(http.StatusOK, response, w)
}
