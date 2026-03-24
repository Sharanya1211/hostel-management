import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { COLORS } from "../../utils/constants";

const C = COLORS;

export default function Login() {
  const [form,    setForm]    = useState({ email: "", password: "" });
  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate  = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await login(form);
      console.log("LOGIN SUCCESS - user:", user);
      console.log("ROLE:", user.role);

      if (user.role === "admin") {
        console.log("Navigating to /admin");
        navigate("/admin", { replace: true });
      } else {
        console.log("Navigating to /dashboard");
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      console.log("LOGIN ERROR:", err);
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif", padding: 20 }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle, #1e2d4520 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: 420, position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 58, height: 58, borderRadius: 16, background: "linear-gradient(135deg,#3b82f6,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 14px" }}>🏨</div>
          <div style={{ fontSize: 28, fontWeight: 800, color: C.text, letterSpacing: "-0.02em" }}>SMART HOSTEL RESERVATION PLATFORM</div>
          <div style={{ fontSize: 14, color: C.muted, marginTop: 4 }}>Sign in to your account</div>
        </div>

        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: 32, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
          {error && (
            <div style={{ background: "#ef444415", border: "1px solid #ef444440", borderRadius: 10, padding: "10px 14px", marginBottom: 20, color: C.danger, fontSize: 13 }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={submit}>
            {[
              { name: "email",    label: "Email",    type: "email",    placeholder: "you@example.com" },
              { name: "password", label: "Password", type: "password", placeholder: "••••••••"        },
            ].map((f) => (
              <div key={f.name} style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: C.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {f.label}
                </label>
                <input
                  name={f.name}
                  type={f.type}
                  value={form[f.name]}
                  placeholder={f.placeholder}
                  required
                  onChange={(e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))}
                  style={{ width: "100%", padding: "12px 14px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box" }}
                  onFocus={(e) => (e.target.style.borderColor = C.accent)}
                  onBlur={(e)  => (e.target.style.borderColor = C.border)}
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              style={{ width: "100%", padding: 13, marginTop: 6, background: loading ? C.border : "linear-gradient(135deg,#3b82f6,#6366f1)", border: "none", borderRadius: 12, color: "#fff", fontWeight: 700, fontSize: 15, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: C.muted }}>
            No account?{" "}
            <Link to="/register" style={{ color: C.accent, fontWeight: 600, textDecoration: "none" }}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}