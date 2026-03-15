import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authAPI } from "../../api/axios";
import { useAuth } from "../../hooks/useAuth";
import { COLORS } from "../../utils/constants";

const C = COLORS;

const EMPTY = {
  name: "", email: "", password: "",
  role: "student",
  username: "", phone: "", aadharNumber: "",
  permanentAddress: "", studentId: "", course: "",
};

export default function Register() {
  const [form,    setForm]    = useState(EMPTY);
  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);
  const [step,    setStep]    = useState(1);
  const { login }             = useAuth();
  const navigate              = useNavigate();

  const set = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      await authAPI.register(form);
      const user = await login({ email: form.email, password: form.password });
      navigate(user.role === "admin" ? "/admin" : "/dashboard");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "11px 14px",
    background: C.card, border: "1px solid " + C.border,
    borderRadius: 10, color: C.text, fontSize: 14,
    outline: "none", boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const labelStyle = {
    display: "block", fontSize: 12, fontWeight: 700,
    color: C.muted, marginBottom: 5,
    textTransform: "uppercase", letterSpacing: "0.06em",
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif", padding: 20 }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle, #1e2d4520 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: 500, position: "relative" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg,#3b82f6,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto 12px" }}>🏨</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: C.text }}>Create Account</div>
          <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>Join HostelPro today</div>
        </div>

        <div style={{ background: C.surface, border: "1px solid " + C.border, borderRadius: 20, padding: 32, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>

          {error && (
            <div style={{ background: "#ef444415", border: "1px solid #ef444440", borderRadius: 10, padding: "10px 14px", marginBottom: 18, color: C.danger, fontSize: 13 }}>
              ⚠️ {error}
            </div>
          )}

          {/* Role toggle */}
          <div style={{ marginBottom: 22 }}>
            <label style={labelStyle}>I am a</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {["student", "admin"].map((r) => (
                <button key={r} type="button"
                  onClick={() => setForm((p) => ({ ...p, role: r }))}
                  style={{ padding: 10, borderRadius: 10, border: "1px solid " + (form.role === r ? C.accent : C.border), background: form.role === r ? C.accent + "18" : C.card, color: form.role === r ? C.accent : C.muted, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {r === "student" ? "🎓 Student" : "🏨 Admin"}
                </button>
              ))}
            </div>
          </div>

          {/* Step indicator — students only */}
          {form.role === "student" && (
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {[1, 2].map((s) => (
                <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, background: step >= s ? C.accent : "rgba(255,255,255,0.1)" }} />
              ))}
            </div>
          )}

          <form onSubmit={submit}>

            {/* ── ADMIN FORM ── */}
            {form.role === "admin" && (
              <div>
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Full Name *</label>
                  <input name="name" value={form.name} onChange={set} required
                    placeholder="John Admin" style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={set} required
                    placeholder="admin@hostel.com" style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                {/* ── PHONE — admin only ── */}
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={set} required
                    placeholder="9876543210" maxLength={10} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Password *</label>
                  <input name="password" type="password" value={form.password} onChange={set} required
                    placeholder="Min 6 characters" style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <button type="submit" disabled={loading}
                  style={{ width: "100%", padding: 13, marginTop: 8, background: loading ? C.border : "linear-gradient(135deg,#3b82f6,#6366f1)", border: "none", borderRadius: 12, color: "#fff", fontWeight: 700, fontSize: 15, cursor: loading ? "not-allowed" : "pointer" }}>
                  {loading ? "Creating..." : "Create Admin Account →"}
                </button>
              </div>
            )}

            {/* ── STUDENT STEP 1 ── */}
            {form.role === "student" && step === 1 && (
              <div>
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Full Name *</label>
                  <input name="name" value={form.name} onChange={set} required
                    placeholder="Sharanya Thadisina" style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={set} required
                    placeholder="you@example.com" style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Username *</label>
                  <input name="username" value={form.username} onChange={set} required
                    placeholder="sharanya123" style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Password *</label>
                  <input name="password" type="password" value={form.password} onChange={set} required
                    placeholder="Min 6 characters" style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <button type="button"
                  onClick={() => {
                    if (!form.name || !form.email || !form.password || !form.username) {
                      setError("Please fill all required fields before continuing.");
                      return;
                    }
                    setError("");
                    setStep(2);
                  }}
                  style={{ width: "100%", padding: 13, marginTop: 8, background: "linear-gradient(135deg,#3b82f6,#6366f1)", border: "none", borderRadius: 12, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                  Continue →
                </button>
              </div>
            )}

            {/* ── STUDENT STEP 2 ── */}
            {form.role === "student" && step === 2 && (
              <div>
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={set} required
                    placeholder="9876543210" maxLength={10} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Aadhar Number *</label>
                  <input name="aadharNumber" value={form.aadharNumber} onChange={set} required
                    placeholder="1234 5678 9012" maxLength={14} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Student ID</label>
                  <input name="studentId" value={form.studentId} onChange={set}
                    placeholder="STU2025001" style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Course</label>
                  <input name="course" value={form.course} onChange={set}
                    placeholder="B.Tech Computer Science" style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Permanent Address *</label>
                  <textarea name="permanentAddress" value={form.permanentAddress} onChange={set} required rows={3}
                    placeholder="House No, Street, City, State, Pincode"
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = C.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = C.border)} />
                </div>

                <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                  <button type="button" onClick={() => setStep(1)}
                    style={{ flex: 1, padding: 13, background: "transparent", border: "1px solid " + C.border, borderRadius: 12, color: C.muted, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                    ← Back
                  </button>
                  <button type="submit" disabled={loading}
                    style={{ flex: 2, padding: 13, background: loading ? C.border : "linear-gradient(135deg,#3b82f6,#6366f1)", border: "none", borderRadius: 12, color: "#fff", fontWeight: 700, fontSize: 15, cursor: loading ? "not-allowed" : "pointer" }}>
                    {loading ? "Creating..." : "Create Account →"}
                  </button>
                </div>
              </div>
            )}

          </form>

          <div style={{ textAlign: "center", marginTop: 18, fontSize: 14, color: C.muted }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: C.accent, fontWeight: 600, textDecoration: "none" }}>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}