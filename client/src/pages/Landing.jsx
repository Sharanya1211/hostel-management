import { useNavigate } from "react-router-dom";

const FEATURES = [
  { icon: "🏨", title: "500+ Hostels",       desc: "Browse verified hostels across all major cities in India" },
  { icon: "📍", title: "Location Search",    desc: "Find hostels near your college using GPS or city search" },
  { icon: "⚡", title: "Instant Booking",    desc: "Book your room in seconds, get confirmation immediately" },
  { icon: "⏳", title: "Smart Waiting List", desc: "Auto-assigned a room the moment one becomes available" },
  { icon: "🔒", title: "Secure Access",      desc: "JWT secured login with role-based access control" },
  { icon: "⭐", title: "Reviews + Ratings",  desc: "Read and write reviews to help students choose better" },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'Segoe UI', sans-serif", color: "#1e293b" }}>

      {/* ── Navbar ── */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, background: "#ffffff", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "#1e40af", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏨</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#1e293b" }}>HostelPro</div>
            <div style={{ fontSize: 10, color: "#64748b", marginTop: -2 }}>Student Housing Platform</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button
            onClick={() => navigate("/login")}
            style={{ padding: "9px 22px", background: "transparent", border: "1px solid #cbd5e1", borderRadius: 10, color: "#475569", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
            onMouseEnter={(e) => { e.target.style.borderColor = "#1e40af"; e.target.style.color = "#1e40af"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "#cbd5e1"; e.target.style.color = "#475569"; }}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/register")}
            style={{ padding: "9px 22px", background: "#1e40af", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
            onMouseEnter={(e) => { e.target.style.background = "#1e3a8a"; }}
            onMouseLeave={(e) => { e.target.style.background = "#1e40af"; }}
          >
            Get Started →
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ textAlign: "center", padding: "80px 48px 60px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ display: "inline-block", padding: "6px 16px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 20, fontSize: 12, fontWeight: 700, color: "#1e40af", marginBottom: 20, letterSpacing: "0.05em" }}>
          🎓 INDIA'S #1 STUDENT HOSTEL PLATFORM
        </div>

        <div style={{ fontSize: 13, fontWeight: 700, color: "#1e40af", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
          Smart Hostel Reservation Platform
        </div>

        <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 680, margin: "0 auto 20px" }}>
          Find Your Perfect
          <span style={{ color: "#1e40af", display: "block" }}>Student Hostel</span>
        </div>

        <p style={{ fontSize: 17, color: "#64748b", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.7 }}>
          Search verified hostels near your college, book instantly, and get auto-assigned when rooms open up — all in one place.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("/register")}
            style={{ padding: "14px 32px", background: "#1e40af", border: "none", borderRadius: 14, color: "#fff", fontWeight: 800, fontSize: 16, cursor: "pointer", boxShadow: "0 4px 20px rgba(30,64,175,0.3)" }}
            onMouseEnter={(e) => { e.target.style.background = "#1e3a8a"; }}
            onMouseLeave={(e) => { e.target.style.background = "#1e40af"; }}
          >
            🎓 Register as Student
          </button>
          <button
            onClick={() => navigate("/login")}
            style={{ padding: "14px 32px", background: "transparent", border: "1px solid #cbd5e1", borderRadius: 14, color: "#1e293b", fontWeight: 700, fontSize: 16, cursor: "pointer" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1e40af"; e.currentTarget.style.color = "#1e40af"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.color = "#1e293b"; }}
          >
            Sign In →
          </button>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "60px 48px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1e40af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Why HostelPro</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#1e293b" }}>Everything you need</div>
          <div style={{ fontSize: 15, color: "#64748b", marginTop: 10 }}>Built specifically for Indian college students</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, maxWidth: 920, margin: "0 auto" }}>
          {FEATURES.map(function(f) {
            return (
              <div key={f.title}
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: "24px 22px", transition: "box-shadow 0.15s, border-color 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = "#bfdbfe"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
              >
                <div style={{ fontSize: 30, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1e293b", marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: "60px 48px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1e40af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Simple Process</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#1e293b" }}>How it works</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, maxWidth: 920, margin: "0 auto" }}>
          {[
            { step: "01", icon: "📝", title: "Register", desc: "Create your account with student details" },
            { step: "02", icon: "🔍", title: "Search",   desc: "Find hostels by city or near your location" },
            { step: "03", icon: "📋", title: "Book",     desc: "Select dates and confirm booking instantly" },
            { step: "04", icon: "🏠", title: "Move In",  desc: "Get your room and start college journey" },
          ].map(function(s) {
            return (
              <div key={s.step} style={{ textAlign: "center", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: "28px 18px" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#1e40af", letterSpacing: "0.1em", marginBottom: 12 }}>{s.step}</div>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "60px 48px", textAlign: "center" }}>
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 24, padding: "60px 40px", maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1e40af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>
            Smart Hostel Reservation Platform
          </div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#1e293b", marginBottom: 14 }}>
            Ready to find your hostel?
          </div>
          <div style={{ fontSize: 15, color: "#64748b", marginBottom: 28, lineHeight: 1.6 }}>
            Join thousands of students who found their perfect accommodation through HostelPro.
          </div>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/register")}
              style={{ padding: "14px 32px", background: "#1e40af", border: "none", borderRadius: 14, color: "#fff", fontWeight: 800, fontSize: 16, cursor: "pointer" }}
              onMouseEnter={(e) => { e.target.style.background = "#1e3a8a"; }}
              onMouseLeave={(e) => { e.target.style.background = "#1e40af"; }}
            >
              🎓 Register Now — It is Free
            </button>
            <button
              onClick={() => navigate("/login")}
              style={{ padding: "14px 24px", background: "transparent", border: "1px solid #93c5fd", borderRadius: 14, color: "#1e40af", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
            >
              Already have an account?
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid #e2e8f0", padding: "24px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, background: "#f8fafc" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#1e40af", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🏨</div>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>HostelPro</span>
        </div>
        <div style={{ fontSize: 13, color: "#64748b" }}>© 2025 Smart Hostel Reservation Platform. Built for Indian college students.</div>
        <div style={{ display: "flex", gap: 20 }}>
          {["About", "Privacy", "Terms", "Contact"].map(function(link) {
            return (
              <span key={link} style={{ fontSize: 13, color: "#64748b", cursor: "pointer" }}
                onMouseEnter={(e) => (e.target.style.color = "#1e40af")}
                onMouseLeave={(e) => (e.target.style.color = "#64748b")}>
                {link}
              </span>
            );
          })}
        </div>
      </footer>

    </div>
  );
}