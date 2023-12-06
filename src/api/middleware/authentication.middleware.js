// Middleware para verificar se o usuário está autenticado
function requireAuth(req, res, next) {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.status(401).json({ error: "Acesso não autorizado" });
  }
}

module.exports = requireAuth;
